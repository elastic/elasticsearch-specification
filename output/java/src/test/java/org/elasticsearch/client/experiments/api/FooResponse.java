package org.elasticsearch.client.experiments.api;

import org.elasticsearch.client.experiments.base.FromXContent;
import org.elasticsearch.common.xcontent.ContextParser;

public class FooResponse {

  public static ContextParser<FromXContent.Params, FooResponse> PARSER = null;
}
