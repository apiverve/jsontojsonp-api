/// Response models for the JSON to JSONP API.

/// API Response wrapper.
class JsontojsonpResponse {
  final String status;
  final dynamic error;
  final JsontojsonpData? data;

  JsontojsonpResponse({
    required this.status,
    this.error,
    this.data,
  });

  factory JsontojsonpResponse.fromJson(Map<String, dynamic> json) => JsontojsonpResponse(
    status: json['status'] as String? ?? '',
    error: json['error'],
    data: json['data'] != null ? JsontojsonpData.fromJson(json['data']) : null,
  );

  Map<String, dynamic> toJson() => {
    'status': status,
    if (error != null) 'error': error,
    if (data != null) 'data': data,
  };
}

/// Response data for the JSON to JSONP API.

class JsontojsonpData {
  String? callback;
  String? jsonp;

  JsontojsonpData({
    this.callback,
    this.jsonp,
  });

  factory JsontojsonpData.fromJson(Map<String, dynamic> json) => JsontojsonpData(
      callback: json['callback'],
      jsonp: json['jsonp'],
    );
}

class JsontojsonpRequest {
  String? callback;
  Map<String, dynamic> json;

  JsontojsonpRequest({
    this.callback,
    required this.json,
  });

  Map<String, dynamic> toJson() => {
      if (callback != null) 'callback': callback,
      'json': json,
    };
}
