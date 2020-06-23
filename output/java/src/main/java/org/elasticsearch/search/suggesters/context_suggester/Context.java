package org.elasticsearch.search.suggesters.context_suggester;

import org.elasticsearch.Either;
import org.elasticsearch.XContentable;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.query_dsl.geo.*;
import org.elasticsearch.common_abstractions.union.*;
import java.io.IOException;
import java.util.List;

public class Context extends Either<String, GeoLocation> implements XContentable<Context> {

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return null;
  }

  @Override
  public Context fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return null;
  }
}
