from setuptools import setup, find_packages

setup(
    name='apiverve_jsontojsonp',
    version='1.2.2',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='JSON to JSONP wraps JSON data in a JavaScript callback function to produce valid JSONP output. Pass an object or JSON string with an optional callback identifier to receive the formatted script string.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/jsontojsonp?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
