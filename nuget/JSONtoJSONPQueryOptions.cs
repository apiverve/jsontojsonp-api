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
        /// The JSON data you want converted into JSONP format
        /// </summary>
        [JsonProperty("json")]
        public string Json { get; set; }

        /// <summary>
        /// The callback function name to wrap the JSON data
        /// </summary>
        [JsonProperty("callback")]
        public string Callback { get; set; }
    }
}
