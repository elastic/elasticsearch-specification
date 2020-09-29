
package org.elasticsearch.cat.cat_help;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_abstractions.request.*;

public class CatHelpRequest extends RequestBase<CatHelpRequest> implements XContentable<CatHelpRequest> {
  
  static final ParseField HELP = new ParseField("help");
  private Boolean _help;
  public Boolean getHelp() { return this._help; }
  public CatHelpRequest setHelp(Boolean val) { this._help = val; return this; }

  static final ParseField SORT_BY_COLUMNS = new ParseField("sort_by_columns");
  private List<String> _sortByColumns;
  public List<String> getSortByColumns() { return this._sortByColumns; }
  public CatHelpRequest setSortByColumns(List<String> val) { this._sortByColumns = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_help != null) {
      builder.field(HELP.getPreferredName(), _help);
    }
    if (_sortByColumns != null) {
      builder.array(SORT_BY_COLUMNS.getPreferredName(), _sortByColumns);
    }
  }

  @Override
  public CatHelpRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatHelpRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatHelpRequest, Void> PARSER =
    new ObjectParser<>(CatHelpRequest.class.getName(), false, CatHelpRequest::new);

  static {
    PARSER.declareBoolean(CatHelpRequest::setHelp, HELP);
    PARSER.declareStringArray(CatHelpRequest::setSortByColumns, SORT_BY_COLUMNS);
  }

}
