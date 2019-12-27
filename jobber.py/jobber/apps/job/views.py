import json
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from .models import JobPosting
from .documents import JobPostingDocument
from .serializers import JobPostingSerializer

class JobPostingViewSet(ModelViewSet):
    queryset = JobPosting.objects.all()
    serializer_class = JobPostingSerializer
    # authentication_classes = []
    # search_fields = ['title', 'county', 'zips']
    # ordering_fields = ['city', 'population', 'ranking']

    @action(methods=['post'], detail=False)
    def search(self, request):
        body = request.data
        search = (JobPostingDocument
                    .search()
                    .query('match', title='computer')
                    .params(filter_path=['hits.hits._source', 'hits.total.value'])
                    .source(excludes=['locations.coordinates', 'locations.zips']))
        response = search.execute()
        hits = response.to_dict()
        return Response(data=hits, status=status.HTTP_200_OK)

    @action(methods=['post'], detail=False)
    def job_title_suggestions(self, request):
        search_value = request.data.get('title')
        search = (JobPostingDocument
                    .search()
                    .suggest('auto_complete', search_value, completion={'field': 'suggest', 'skip_duplicates': True})
                    .source(includes=['title']))
        response = search.execute()
        hits = response.to_dict()
        data = [hit['_source']['title'] for hit in hits['suggest']['auto_complete'][0]['options']]
        return Response(data=data, status=status.HTTP_200_OK)