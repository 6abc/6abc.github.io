function generateCode() {
            var fillA = document.getElementById('fillA').value;
            var fillB = document.getElementById('fillB').value;
            var fillC1 = document.getElementById('fillC1').value;
            var fillC2 = document.getElementById('fillC2').value;
            var fillC3 = document.getElementById('fillC3').value;

            var generatedCode = `
from django.core.management.base import BaseCommand
from faker import Faker
from ${fillA}.models import ${fillB}
import random
from datetime import datetime, timedelta
from tqdm import tqdm

class Command(BaseCommand):
    help = 'Generates fake data for the Profile model'

    def add_arguments(self, parser):
        parser.add_argument('total_entries', type=int, help='Indicates the total number of entries to generate')

    def handle(self, *args, **options):
        total_entries = options['total_entries']
        fake = Faker()

        profiles = []

        for _ in tqdm(range(total_entries), desc='Generating fake data', unit='entry'):
            name = fake.name()
            age = random.randint(18, 99)
            date_of_birth = fake.date_of_birth(minimum_age=age)

            profiles.append(${fillB}(${fillC1}=name, ${fillC2}=age, ${fillC3}=date_of_birth))

        ${fillB}.objects.bulk_create(profiles)

        self.stdout.write(self.style.SUCCESS(f'Successfully generated {total_entries} fake entries for the Profile model.'))`;

            document.getElementById('generatedCode').value = generatedCode;
        }

        function copyToClipboard() {
            var copyText = document.getElementById('generatedCode');
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            document.execCommand('copy');
            alert('Code copied to clipboard!');
        }
