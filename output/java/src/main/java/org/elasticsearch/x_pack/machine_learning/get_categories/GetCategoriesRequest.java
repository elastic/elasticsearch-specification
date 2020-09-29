
package org.elasticsearch.x_pack.machine_learning.get_categories;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.x_pack.machine_learning.job.*;
import org.elasticsearch.common_abstractions.request.*;

public class GetCategoriesRequest extends RequestBase<GetCategoriesRequest> implements XContentable<GetCategoriesRequest> {
  
  static final ParseField PAGE = new ParseField("page");
  private Page _page;
  public Page getPage() { return this._page; }
  public GetCategoriesRequest setPage(Page val) { this._page = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_page != null) {
      builder.field(PAGE.getPreferredName());
      _page.toXContent(builder, params);
    }
  }

  @Override
  public GetCategoriesRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetCategoriesRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetCategoriesRequest, Void> PARSER =
    new ObjectParser<>(GetCategoriesRequest.class.getName(), false, GetCategoriesRequest::new);

  static {
    PARSER.declareObject(GetCategoriesRequest::setPage, (p, t) -> Page.PARSER.apply(p, t), PAGE);
  }

}
