# JSON to JSONP API - PHP Package

JSON to JSONP is a simple tool for converting JSON data into JSONP format. It returns the converted JSONP data.

## Installation

Install via Composer:

```bash
composer require apiverve/jsontojsonp
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Jsontojsonp\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute([
    'callback' => 'callbackFunction',
    'json' => [object Object]
]);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Jsontojsonp\Client;
use APIVerve\Jsontojsonp\Exceptions\APIException;
use APIVerve\Jsontojsonp\Exceptions\ValidationException;

try {
    $response = $client->execute(['callback' => 'callbackFunction', 'json' => [object Object]]);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "callback": "callbackFunction",
    "jsonp": "callbackFunction({\"menu\":{\"id\":\"file\",\"value\":\"File\",\"popup\":false}});"
  }
}
```

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/jsontojsonp?utm_source=packagist&utm_medium=readme).

## Support

- Website: [https://apiverve.com/marketplace/jsontojsonp?utm_source=php&utm_medium=readme](https://apiverve.com/marketplace/jsontojsonp?utm_source=php&utm_medium=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
