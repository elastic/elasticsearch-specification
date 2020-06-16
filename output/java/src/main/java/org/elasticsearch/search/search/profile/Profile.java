
package org.elasticsearch.search.search.profile;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.Either;
import org.elasticsearch.XContentable;
import org.elasticsearch.NamedContainer;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.search.search.profile.*;

public class Profile  implements XContentable<Profile> {
  
  static final ParseField SHARDS = new ParseField("shards");
  private List<ShardProfile> _shards;
  public List<ShardProfile> getShards() { return this._shards; }
  public Profile setShards(List<ShardProfile> val) { this._shards = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_shards != null) {
      builder.array(SHARDS.getPreferredName(), _shards);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public Profile fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Profile.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Profile, Void> PARSER =
    new ObjectParser<>(Profile.class.getName(), false, Profile::new);

  static {
    PARSER.declareObjectArray(Profile::setShards, (p, t) -> ShardProfile.PARSER.apply(p, t), SHARDS);
  }

}
