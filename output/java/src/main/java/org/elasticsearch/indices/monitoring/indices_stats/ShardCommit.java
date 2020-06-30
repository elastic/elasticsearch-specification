
package org.elasticsearch.indices.monitoring.indices_stats;

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
import org.elasticsearch.internal.*;

public class ShardCommit  implements XContentable<ShardCommit> {
  
  static final ParseField GENERATION = new ParseField("generation");
  private Integer _generation;
  public Integer getGeneration() { return this._generation; }
  public ShardCommit setGeneration(Integer val) { this._generation = val; return this; }


  static final ParseField ID = new ParseField("id");
  private String _id;
  public String getId() { return this._id; }
  public ShardCommit setId(String val) { this._id = val; return this; }


  static final ParseField NUM_DOCS = new ParseField("num_docs");
  private Long _numDocs;
  public Long getNumDocs() { return this._numDocs; }
  public ShardCommit setNumDocs(Long val) { this._numDocs = val; return this; }


  static final ParseField USER_DATA = new ParseField("user_data");
  private NamedContainer<String, String> _userData;
  public NamedContainer<String, String> getUserData() { return this._userData; }
  public ShardCommit setUserData(NamedContainer<String, String> val) { this._userData = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_generation != null) {
      builder.field(GENERATION.getPreferredName(), _generation);
    }
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_numDocs != null) {
      builder.field(NUM_DOCS.getPreferredName(), _numDocs);
    }
    if (_userData != null) {
      builder.field(USER_DATA.getPreferredName());
      _userData.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ShardCommit fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ShardCommit.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ShardCommit, Void> PARSER =
    new ObjectParser<>(ShardCommit.class.getName(), false, ShardCommit::new);

  static {
    PARSER.declareInt(ShardCommit::setGeneration, GENERATION);
    PARSER.declareString(ShardCommit::setId, ID);
    PARSER.declareLong(ShardCommit::setNumDocs, NUM_DOCS);
    PARSER.declareObject(ShardCommit::setUserData, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> pp.text()), USER_DATA);
  }

}
