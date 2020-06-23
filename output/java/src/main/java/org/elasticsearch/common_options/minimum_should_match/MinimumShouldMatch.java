package org.elasticsearch.common_options.minimum_should_match;

import org.elasticsearch.Either;
import org.elasticsearch.XContentable;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_abstractions.union.*;
import org.elasticsearch.internal.*;
import java.io.IOException;
import java.util.List;

public class MinimumShouldMatch extends Either<Integer, String> implements XContentable<MinimumShouldMatch> {

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return null;
  }

  @Override
  public MinimumShouldMatch fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return null;
  }
}
