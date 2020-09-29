
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


public class ReloadDetails  implements XContentable<ReloadDetails> {
  
  static final ParseField INDEX = new ParseField("index");
  private String _index;
  public String getIndex() { return this._index; }
  public ReloadDetails setIndex(String val) { this._index = val; return this; }

  static final ParseField RELOADED_ANALYZERS = new ParseField("reloaded_analyzers");
  private List<String> _reloadedAnalyzers;
  public List<String> getReloadedAnalyzers() { return this._reloadedAnalyzers; }
  public ReloadDetails setReloadedAnalyzers(List<String> val) { this._reloadedAnalyzers = val; return this; }

  static final ParseField RELOADED_NODE_IDS = new ParseField("reloaded_node_ids");
  private List<String> _reloadedNodeIds;
  public List<String> getReloadedNodeIds() { return this._reloadedNodeIds; }
  public ReloadDetails setReloadedNodeIds(List<String> val) { this._reloadedNodeIds = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_index != null) {
      builder.field(INDEX.getPreferredName(), _index);
    }
    if (_reloadedAnalyzers != null) {
      builder.array(RELOADED_ANALYZERS.getPreferredName(), _reloadedAnalyzers);
    }
    if (_reloadedNodeIds != null) {
      builder.array(RELOADED_NODE_IDS.getPreferredName(), _reloadedNodeIds);
    }
  }

  @Override
  public ReloadDetails fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ReloadDetails.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ReloadDetails, Void> PARSER =
    new ObjectParser<>(ReloadDetails.class.getName(), false, ReloadDetails::new);

  static {
    PARSER.declareString(ReloadDetails::setIndex, INDEX);
    PARSER.declareStringArray(ReloadDetails::setReloadedAnalyzers, RELOADED_ANALYZERS);
    PARSER.declareStringArray(ReloadDetails::setReloadedNodeIds, RELOADED_NODE_IDS);
  }

}
