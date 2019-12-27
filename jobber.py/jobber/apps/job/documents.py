from elasticsearch_dsl import analyzer, token_filter
from django_elasticsearch_dsl import Document, fields
from django_elasticsearch_dsl.registries import registry
from jobber.apps.core.models import Location
from .models import JobPosting


# custom analyzer for names
ascii_fold = analyzer(
    'ascii_fold',
    # we don't want to split O'Brian or Toulouse-Lautrec
    tokenizer='whitespace',
    filter=[
        'lowercase',
        token_filter('ascii_fold', 'asciifolding')
    ]
)

@registry.register_document
class JobPostingDocument(Document):
    locations = fields.NestedField(properties={
        'id': fields.IntegerField(),
        'city': fields.TextField(),
        'state': fields.TextField(),
        'county': fields.TextField(),
        'coordinates': fields.GeoPointField(),
        'zips': fields.TextField(multi=True),
    })

    suggest = fields.CompletionField(analyzer=ascii_fold)

    class Index:
        # Name of the Elasticsearch index
        name = 'job_postings'
        # See Elasticsearch Indices API reference for available settings
        settings = {'number_of_shards': 1,
                    'number_of_replicas': 0}

    class Django:
        model = JobPosting # The model associated with this Document

        # The fields of the model you want to be indexed in Elasticsearch
        fields = [
            'id',
            'title',
            'description',
            'job_type',
            'created_on',
            # 'company',
            # 'locations',
        ]
        # Optional: to ensure the JobPosting will be re-saved when Location is updated
        # related_models = [Location,]

        # Ignore auto updating of Elasticsearch when a model is saved
        # or deleted:
        ignore_signals = True

        # Don't perform an index refresh after every update (overrides global setting):
        auto_refresh = False

        # Paginate the django queryset used to populate the index with the specified size
        # (by default it uses the database driver's default setting)
        queryset_pagination = 5000
    
    # def get_instances_from_related(self, related_instance):
    #     """If related_models is set, define how to retrieve the JobPosting instance(s) from the related model.
    #     The related_models option should be used with caution because it can lead in the index
    #     to the updating of a lot of items.
    #     """
    #     if isinstance(related_instance, Location):
    #         return related_instance.job_postings.all()