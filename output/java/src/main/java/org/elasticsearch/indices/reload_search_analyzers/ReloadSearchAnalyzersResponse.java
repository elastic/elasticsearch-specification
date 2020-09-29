
package org.elasticsearch.indices.reload_search_analyzers;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.indices.reload_search_analyzers.*;
import org.elasticsearch.common_options.hit.*;
import org.elasticsearch.common_abstractions.response.*;

public class ReloadSearchAnalyzersResponse extends ResponseBase<ReloadSearchAnalyzersResponse> implements XContentable<ReloadSearchAnalyzersResponse> {
  
  static final ParseField RELOAD_DETAILS = new ParseField("reload_details");
  private List<ReloadDetails> _reloadDetails;
  public List<ReloadDetails> getReloadDetails() { return this._reloadDetails; }
  public ReloadSearchAnalyzersResponse setReloadDetails(List<ReloadDetails> val) { this._reloadDetails = val; return this; }

  static final ParseField SHARDS = new ParseField("_shards");
  private ShardStatistics _shards;
  public ShardStatistics getShards() { return this._shards; }
  public ReloadSearchAnalyzersResponse setShards(ShardStatistics val) { this._shards = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_reloadDetails != null) {
      builder.array(RELOAD_DETAILS.getPreferredName(), _reloadDetails);
    }
    if (_shards != null) {
      builder.field(SHARDS.getPreferredName());
      _shards.toXContent(builder, params);
    }
  }

  @Override
  public ReloadSearchAnalyzersResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ReloadSearchAnalyzersResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ReloadSearchAnalyzersResponse, Void> PARSER =
    new ObjectParser<>(ReloadSearchAnalyzersResponse.class.getName(), false, ReloadSearchAnalyzersResponse::new);

  static {
    PARSER.declareObjectArray(ReloadSearchAnalyzersResponse::setReloadDetails, (p, t) -> ReloadDetails.PARSER.apply(p, t), RELOAD_DETAILS);
    PARSER.declareObject(ReloadSearchAnalyzersResponse::setShards, (p, t) -> ShardStatistics.PARSER.apply(p, t), SHARDS);
  }

}
