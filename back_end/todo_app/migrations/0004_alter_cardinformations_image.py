# Generated by Django 3.2.3 on 2021-09-04 20:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo_app', '0003_alter_extract_card'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cardinformations',
            name='image',
            field=models.ImageField(blank=True, upload_to=''),
        ),
    ]