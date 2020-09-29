
package org.elasticsearch.indices.monitoring.indices_stats;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.internal.*;

public class ShardCommit  implements XContentable<ShardCommit> {
  
  static final ParseField GENERATION = new ParseField("generation");
  private int _generation;
  private boolean _generation$isSet;
  public int getGeneration() { return this._generation; }
  public ShardCommit setGeneration(int val) {
    this._generation = val;
    _generation$isSet = true;
    return this;
  }

  static final ParseField ID = new ParseField("id");
  private String _id;
  public String getId() { return this._id; }
  public ShardCommit setId(String val) { this._id = val; return this; }

  static final ParseField NUM_DOCS = new ParseField("num_docs");
  private long _numDocs;
  private boolean _numDocs$isSet;
  public long getNumDocs() { return this._numDocs; }
  public ShardCommit setNumDocs(long val) {
    this._numDocs = val;
    _numDocs$isSet = true;
    return this;
  }

  static final ParseField USER_DATA = new ParseField("user_data");
  private NamedContainer<String, String> _userData;
  public NamedContainer<String, String> getUserData() { return this._userData; }
  public ShardCommit setUserData(NamedContainer<String, String> val) { this._userData = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_generation$isSet) {
      builder.field(GENERATION.getPreferredName(), _generation);
    }
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_numDocs$isSet) {
      builder.field(NUM_DOCS.getPreferredName(), _numDocs);
    }
    if (_userData != null) {
      builder.field(USER_DATA.getPreferredName());
      _userData.toXContent(builder, params);
    }
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
