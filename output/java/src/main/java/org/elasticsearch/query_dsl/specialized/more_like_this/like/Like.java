package org.elasticsearch.query_dsl.specialized.more_like_this.like;

import org.elasticsearch.Either;
import org.elasticsearch.XContentable;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_abstractions.union.*;
import org.elasticsearch.query_dsl.specialized.more_like_this.like.*;
import java.io.IOException;
import java.util.List;

public class Like extends Either<String, LikeDocument> implements XContentable<Like> {

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return null;
  }

  @Override
  public Like fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return null;
  }
}
