from django.db import models



class CustomManager(models.Manager):
    def get_queryset(self):
        queryset = super().get_queryset()
        for q in queryset:
            if len(q.dis) > 200:
                q.dis = q.dis[:200] + '...'
        return queryset