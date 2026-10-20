using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.JSONtoJSONP
{
    /// <summary>
    /// Query options for the JSON to JSONP API
    /// </summary>
    public class JSONtoJSONPQueryOptions
    {
        /// <summary>
        /// The JSON data you want converted into JSONP format. Send it as an object or as a JSON-encoded string.
        /// </summary>
        [JsonProperty("json")]
        public object Json { get; set; }

        /// <summary>
        /// The callback function name to wrap the JSON data. Must be a JavaScript identifier, optionally dotted (e.g. myCallback or window.myCallback).
        /// </summary>
        [JsonProperty("callback")]
        public string Callback { get; set; }
    }
}
