# JSON to JSONP API - Ruby Gem

JSON to JSONP wraps JSON data in a JavaScript callback function to produce valid JSONP output. Pass an object or JSON string with an optional callback identifier to receive the formatted script string.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_jsontojsonp'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_jsontojsonp
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_jsontojsonp'

# Initialize the client
client = APIVerve::Jsontojsonp::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  callback: "callbackFunction",
  json: [object Object]
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ callback: "callbackFunction", json: [object Object] })
  puts response["data"]
rescue APIVerve::Jsontojsonp::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Jsontojsonp::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Jsontojsonp::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/jsontojsonp?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/jsontojsonp?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/jsontojsonp?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
