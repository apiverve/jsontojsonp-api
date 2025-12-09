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
        /// Example: {"name":"John Doe","age":30,"city":"New York"}
        /// </summary>
        [JsonProperty("json")]
        public string Json { get; set; }
    }
}
