declare module '@apiverve/jsontojsonp' {
  export interface jsontojsonpOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface jsontojsonpResponse {
    status: string;
    error: string | null;
    data: JSONtoJSONPData;
    code?: number;
  }


  interface JSONtoJSONPData {
      callback: string;
      jsonp:    string;
  }

  export default class jsontojsonpWrapper {
    constructor(options: jsontojsonpOptions);

    execute(callback: (error: any, data: jsontojsonpResponse | null) => void): Promise<jsontojsonpResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: jsontojsonpResponse | null) => void): Promise<jsontojsonpResponse>;
    execute(query?: Record<string, any>): Promise<jsontojsonpResponse>;
  }
}
