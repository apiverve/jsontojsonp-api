# JSON to JSONP API - Dart/Flutter Client

JSON to JSONP is a simple tool for converting JSON data into JSONP format. It returns the converted JSONP data.

[![pub package](https://img.shields.io/pub/v/apiverve_jsontojsonp.svg)](https://pub.dev/packages/apiverve_jsontojsonp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is the Dart/Flutter client for the [JSON to JSONP API](https://apiverve.com/marketplace/jsontojsonp?utm_source=dart&utm_medium=readme).

## Installation

Add this to your `pubspec.yaml`:

```yaml
dependencies:
  apiverve_jsontojsonp: ^1.1.14
```

Then run:

```bash
dart pub get
# or for Flutter
flutter pub get
```

## Usage

```dart
import 'package:apiverve_jsontojsonp/apiverve_jsontojsonp.dart';

void main() async {
  final client = JsontojsonpClient('YOUR_API_KEY');

  try {
    final response = await client.execute({
      'callback': 'callbackFunction',
      'json': [object Object]
    });

    print('Status: ${response.status}');
    print('Data: ${response.data}');
  } catch (e) {
    print('Error: $e');
  }
}
```

## Response

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

## API Reference

- **API Home:** [JSON to JSONP API](https://apiverve.com/marketplace/jsontojsonp?utm_source=dart&utm_medium=readme)
- **Documentation:** [docs.apiverve.com/ref/jsontojsonp](https://docs.apiverve.com/ref/jsontojsonp?utm_source=dart&utm_medium=readme)

## Authentication

All requests require an API key. Get yours at [apiverve.com](https://apiverve.com?utm_source=dart&utm_medium=readme).

## License

MIT License - see [LICENSE](LICENSE) for details.

---

Built with Dart for [APIVerve](https://apiverve.com?utm_source=dart&utm_medium=readme)
