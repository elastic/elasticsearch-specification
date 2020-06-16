package org.elasticsearch.analysis;

import org.elasticsearch.Either;
import org.elasticsearch.XContentable;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_abstractions.union.*;
import java.io.IOException;
import java.util.List;

public class StopWords extends Either<String, List<String>> implements XContentable<StopWords> {

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return null;
  }

  @Override
  public StopWords fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return null;
  }
}
