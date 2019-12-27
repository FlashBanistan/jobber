import random
import datetime
from dateutil.relativedelta import relativedelta
from django.core.management.base import BaseCommand
from django.db import transaction

from tqdm import tqdm

from jobber.apps.authentication.models import User
from jobber.apps.company.models import Company
from jobber.apps.core.models import Location

from jobber.apps.authentication.management.commands._factory import UserFactory
from jobber.apps.company.management.commands._factory import CompanyFactory
from jobber.apps.core.management.commands._factory import LocationFactory
from jobber.apps.job.management.commands._factory import JobPostingFactory
from jobber.apps.resume.management.commands._factory import ResumeFactory

from jobber.apps.core.management.commands.job_titles import JOB_TITLES
from jobber.apps.core.management.commands.companies import COMPANIES

NUMBER_OF_COMPANIES = 5928
NUMBER_OF_USERS = 1
NUMBER_OF_JOB_POSTINGS = 10000
NUMBER_OF_RESUMES = 0

class Command(BaseCommand):
    help = 'Seeds the database'

    def add_arguments(self, parser):
        pass

    @transaction.atomic()
    def handle(self, *args, **options):
        LOCATIONS = {}
        USERS = []
        JOB_POSTINGS = []
        RESUMES = []

        ''' DELETE USERS '''
        print('Deleting users...')
        User.objects.all().delete()

        ''' DELETE COMPANIES '''
        print('Deleting companies...')
        Company.objects.all().delete()

        ''' SEED LOCATIONS '''
        print('Populating locations...')
        LOCATIONS = Location.objects.all()

        ''' SEED COMPANIES '''
        print('Seeding companies...')
        for _ in tqdm(enumerate(range(NUMBER_OF_COMPANIES), start=1)):
           CompanyFactory.create(
               locations=random.sample(list(LOCATIONS), 3),
               name=random.sample(COMPANIES, 1)[0]
            )

        ''' SEED USERS '''
        print('Seeding users...')
        for _ in tqdm(enumerate(range(NUMBER_OF_USERS), start=1)):
            USERS.append(UserFactory.create())

        ''' SEED JOB POSTINGS '''
        print('Seeding job postings...')
        for _ in tqdm(enumerate(range(NUMBER_OF_JOB_POSTINGS), start=1)):
            JOB_POSTINGS.append(JobPostingFactory.create(
                    locations=random.sample(list(LOCATIONS), 3),
                    title=random.choice(JOB_TITLES)
                )
            )

        ''' SEED RESUMES '''
        print('Seeding resumes...')
        for _ in tqdm(enumerate(range(NUMBER_OF_RESUMES), start=1)):
            RESUMES.append(ResumeFactory.create())
