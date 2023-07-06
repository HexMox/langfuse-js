/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/api/public/events': {
    /** @description Add an event to the database */
    post: operations['event_create'];
  };
  '/api/public/generations': {
    post: operations['generations_log'];
    patch: operations['generations_update'];
  };
  '/api/public/scores': {
    /** @description Add a score to the database */
    post: operations['score_create'];
  };
  '/api/public/spans': {
    /** @description Add a span to the database */
    post: operations['span_create'];
    /** @description Update a span to the database */
    patch: operations['span_update'];
  };
  '/api/public/traces': {
    /** @description Add a trace to the database */
    post: operations['trace_create'];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /** CreateEventRequest */
    CreateEventRequest: {
      traceId?: string | null;
      traceIdType?: components['schemas']['TraceIdTypeEvent'];
      name?: string | null;
      /** Format: date-time */
      startTime?: string | null;
      metadata?: Record<string, unknown> | null;
      input?: Record<string, unknown> | null;
      output?: Record<string, unknown> | null;
      level?: components['schemas']['ObservationLevelEvent'];
      statusMessage?: string | null;
      parentObservationId?: string | null;
    };
    /** Event */
    Event: {
      id: string;
      traceId: string;
      type: string;
      name?: string | null;
      /** Format: date-time */
      startTime: string;
      metadata?: Record<string, unknown> | null;
      input?: Record<string, unknown> | null;
      output?: Record<string, unknown> | null;
      level: components['schemas']['ObservationLevelEvent'];
      statusMessage?: string | null;
      parentObservationId?: string | null;
    };
    /**
     * ObservationLevelEvent
     * @enum {string}
     */
    ObservationLevelEvent: 'DEBUG' | 'DEFAULT' | 'WARNING' | 'ERROR';
    /**
     * TraceIdTypeEvent
     * @enum {string}
     */
    TraceIdTypeEvent: 'LANGFUSE' | 'EXTERNAL';
    /** CreateLog */
    CreateLog: {
      traceId?: string | null;
      traceIdType?: components['schemas']['TraceIdTypeGenerations'];
      name?: string | null;
      /** Format: date-time */
      startTime?: string | null;
      /** Format: date-time */
      endTime?: string | null;
      /** Format: date-time */
      completionStartTime?: string | null;
      model?: string | null;
      modelParameters?: {
        [key: string]: components['schemas']['MapValue'] | undefined;
      } | null;
      prompt?: Record<string, unknown> | null;
      metadata?: Record<string, unknown> | null;
      completion?: string | null;
      usage?: components['schemas']['LLMUsage'];
      level?: components['schemas']['ObservationLevelGeneration'];
      statusMessage?: string | null;
      parentObservationId?: string | null;
    };
    /** UpdateGenerationRequest */
    UpdateGenerationRequest: {
      generationId: string;
      name?: string | null;
      /** Format: date-time */
      endTime?: string | null;
      /** Format: date-time */
      completionStartTime?: string | null;
      model?: string | null;
      modelParameters?: {
        [key: string]: components['schemas']['MapValue'] | undefined;
      } | null;
      prompt?: Record<string, unknown> | null;
      metadata?: Record<string, unknown> | null;
      completion?: string | null;
      usage?: components['schemas']['LLMUsage'];
      level?: components['schemas']['ObservationLevelGeneration'];
      statusMessage?: string | null;
    };
    /** Log */
    Log: {
      id: string;
      traceId: string;
      type: string;
      name?: string | null;
      /** Format: date-time */
      startTime: string;
      /** Format: date-time */
      endTime?: string | null;
      /** Format: date-time */
      completionStartTime?: string | null;
      model?: string | null;
      modelParameters?: {
        [key: string]: components['schemas']['MapValue'] | undefined;
      } | null;
      prompt?: Record<string, unknown> | null;
      metadata?: Record<string, unknown> | null;
      completion?: string | null;
      usage?: components['schemas']['LLMUsage'];
      level: components['schemas']['ObservationLevelGeneration'];
      statusMessage?: string | null;
      parentObservationId?: string | null;
    };
    /** LLMUsage */
    LLMUsage: {
      promptTokens?: number | null;
      completionTokens?: number | null;
      totalTokens?: number | null;
    };
    /** MapValue */
    MapValue: (string | null) | (number | null) | (boolean | null);
    /**
     * ObservationLevelGeneration
     * @enum {string}
     */
    ObservationLevelGeneration: 'DEBUG' | 'DEFAULT' | 'WARNING' | 'ERROR';
    /**
     * TraceIdTypeGenerations
     * @enum {string}
     */
    TraceIdTypeGenerations: 'LANGFUSE' | 'EXTERNAL';
    /** CreateScoreRequest */
    CreateScoreRequest: {
      traceId: string;
      traceIdType?: components['schemas']['TraceIdType'];
      name: string;
      value: number;
      observationId?: string | null;
    };
    /** Score */
    Score: {
      id: string;
      traceId: string;
      name: string;
      value: number;
      observationId?: string | null;
      /** Format: date-time */
      timestamp: string;
    };
    /**
     * TraceIdType
     * @enum {string}
     */
    TraceIdType: 'LANGFUSE' | 'EXTERNAL';
    /** CreateSpanRequest */
    CreateSpanRequest: {
      traceId?: string | null;
      traceIdType?: components['schemas']['TraceIdTypeSpan'];
      name?: string | null;
      /** Format: date-time */
      startTime?: string | null;
      /** Format: date-time */
      endTime?: string | null;
      metadata?: Record<string, unknown> | null;
      input?: Record<string, unknown> | null;
      output?: Record<string, unknown> | null;
      level?: components['schemas']['ObservationLevelSpan'];
      statusMessage?: string | null;
      parentObservationId?: string | null;
    };
    /** UpdateSpanRequest */
    UpdateSpanRequest: {
      spanId: string;
      /** Format: date-time */
      endTime?: string | null;
      metadata?: Record<string, unknown> | null;
      input?: Record<string, unknown> | null;
      output?: Record<string, unknown> | null;
      level?: components['schemas']['ObservationLevelSpan'];
      statusMessage?: string | null;
    };
    /** Span */
    Span: {
      id: string;
      traceId: string;
      type: string;
      name?: string | null;
      /** Format: date-time */
      startTime: string;
      /** Format: date-time */
      endTime?: string | null;
      metadata?: Record<string, unknown> | null;
      input?: Record<string, unknown> | null;
      output?: Record<string, unknown> | null;
      level: components['schemas']['ObservationLevelSpan'];
      statusMessage?: string | null;
      parentObservationId?: string | null;
    };
    /**
     * ObservationLevelSpan
     * @enum {string}
     */
    ObservationLevelSpan: 'DEBUG' | 'DEFAULT' | 'WARNING' | 'ERROR';
    /**
     * TraceIdTypeSpan
     * @enum {string}
     */
    TraceIdTypeSpan: 'LANGFUSE' | 'EXTERNAL';
    /** CreateTraceRequest */
    CreateTraceRequest: {
      name?: string | null;
      externalId?: string | null;
      metadata?: Record<string, unknown> | null;
    };
    /** Trace */
    Trace: {
      id: string;
      /** Format: date-time */
      timestamp: string;
      externalId?: string | null;
      name?: string | null;
      metadata?: Record<string, unknown> | null;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export interface operations {
  /** @description Add an event to the database */
  event_create: {
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateEventRequest'];
      };
    };
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['Event'];
        };
      };
      400: {
        content: {
          'application/json': string;
        };
      };
      401: {
        content: {
          'application/json': string;
        };
      };
      403: {
        content: {
          'application/json': string;
        };
      };
      405: {
        content: {
          'application/json': string;
        };
      };
    };
  };
  generations_log: {
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateLog'];
      };
    };
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['Log'];
        };
      };
      400: {
        content: {
          'application/json': string;
        };
      };
      401: {
        content: {
          'application/json': string;
        };
      };
      403: {
        content: {
          'application/json': string;
        };
      };
      405: {
        content: {
          'application/json': string;
        };
      };
    };
  };
  generations_update: {
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateGenerationRequest'];
      };
    };
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['Log'];
        };
      };
      400: {
        content: {
          'application/json': string;
        };
      };
      401: {
        content: {
          'application/json': string;
        };
      };
      403: {
        content: {
          'application/json': string;
        };
      };
      405: {
        content: {
          'application/json': string;
        };
      };
    };
  };
  /** @description Add a score to the database */
  score_create: {
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateScoreRequest'];
      };
    };
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['Score'];
        };
      };
      400: {
        content: {
          'application/json': string;
        };
      };
      401: {
        content: {
          'application/json': string;
        };
      };
      403: {
        content: {
          'application/json': string;
        };
      };
      405: {
        content: {
          'application/json': string;
        };
      };
    };
  };
  /** @description Add a span to the database */
  span_create: {
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateSpanRequest'];
      };
    };
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['Span'];
        };
      };
      400: {
        content: {
          'application/json': string;
        };
      };
      401: {
        content: {
          'application/json': string;
        };
      };
      403: {
        content: {
          'application/json': string;
        };
      };
      405: {
        content: {
          'application/json': string;
        };
      };
    };
  };
  /** @description Update a span to the database */
  span_update: {
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateSpanRequest'];
      };
    };
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['Span'];
        };
      };
      400: {
        content: {
          'application/json': string;
        };
      };
      401: {
        content: {
          'application/json': string;
        };
      };
      403: {
        content: {
          'application/json': string;
        };
      };
      405: {
        content: {
          'application/json': string;
        };
      };
    };
  };
  /** @description Add a trace to the database */
  trace_create: {
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateTraceRequest'];
      };
    };
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['Trace'];
        };
      };
      400: {
        content: {
          'application/json': string;
        };
      };
      401: {
        content: {
          'application/json': string;
        };
      };
      403: {
        content: {
          'application/json': string;
        };
      };
      405: {
        content: {
          'application/json': string;
        };
      };
    };
  };
}
