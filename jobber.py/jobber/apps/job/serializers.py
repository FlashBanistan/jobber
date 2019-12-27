from rest_flex_fields import FlexFieldsModelSerializer
from .models import JobPosting


class JobPostingSerializer(FlexFieldsModelSerializer):

    class Meta:
        model = JobPosting
        fields = [
            'id',
            'title',
            'description',
            'job_type',
            'created_on',
            'posted_by',
            'company',
            'locations',
        ]

    expandable_fields = {
        'locations': ('jobber.apps.core.LocationReadSerializer', {'source': 'locations', 'many': True})
    }
        