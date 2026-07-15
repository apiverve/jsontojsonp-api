declare module '@apiverve/jsontojsonp' {
  export interface jsontojsonpOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface jsontojsonpResponse {
    status: string;
    error: string | null;
    data: JSONtoJSONPData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface JSONtoJSONPData {
      callback: null | string;
      jsonp:    null | string;
  }

  export default class jsontojsonpWrapper {
    constructor(options: jsontojsonpOptions);

    execute(callback: (error: any, data: jsontojsonpResponse | null) => void): Promise<jsontojsonpResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: jsontojsonpResponse | null) => void): Promise<jsontojsonpResponse>;
    execute(query?: Record<string, any>): Promise<jsontojsonpResponse>;
  }
}
