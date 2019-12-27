from django.db import models
from django.contrib.postgres.fields import ArrayField
from jobber.apps.core.choices import COUNTRIES, STATES


# class Location(models.Model):
#     address1 = models.CharField(max_length=255, blank=True)
#     address2 = models.CharField(max_length=255, blank=True)
#     address3 = models.CharField(max_length=255, blank=True)
#     address4 = models.CharField(max_length=255, blank=True)
#     locality = models.CharField(max_length=255, blank=True)
#     region = models.CharField(max_length=255, blank=True)
#     postcode = models.CharField(max_length=255, blank=True)
#     country = models.CharField(max_length=255, blank=True, choices=COUNTRIES)

class Location(models.Model):
    # https://simplemaps.com/data/us-cities
    city = models.CharField(max_length=255, blank=True, db_index=True)
    state = models.CharField(max_length=255, blank=True, db_index=True)
    county = models.CharField(max_length=255, blank=True, db_index=True)
    latitude = models.DecimalField(max_digits=9, decimal_places=6, db_index=True)
    longitude = models.DecimalField(max_digits=9, decimal_places=6, db_index=True)
    population = models.IntegerField(blank=True, db_index=True)
    density = models.IntegerField(blank=True, db_index=True)
    incorporated = models.BooleanField(blank=True, db_index=True)
    timezone = models.CharField(max_length=255, blank=True, db_index=True)
    ranking = models.IntegerField(blank=True, db_index=True)
    zips = ArrayField(models.CharField(max_length=255), blank=True, default=list, db_index=True)

    @property
    def coordinates(self):
        return {'lat': self.latitude, 'lon': self.longitude}
