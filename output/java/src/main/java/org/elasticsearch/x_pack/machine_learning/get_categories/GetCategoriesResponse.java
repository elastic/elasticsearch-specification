
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
import org.elasticsearch.x_pack.machine_learning.job.results.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common_abstractions.response.*;

public class GetCategoriesResponse extends ResponseBase<GetCategoriesResponse> implements XContentable<GetCategoriesResponse> {
  
  static final ParseField CATEGORIES = new ParseField("categories");
  private List<CategoryDefinition> _categories;
  public List<CategoryDefinition> getCategories() { return this._categories; }
  public GetCategoriesResponse setCategories(List<CategoryDefinition> val) { this._categories = val; return this; }

  static final ParseField COUNT = new ParseField("count");
  private long _count;
  private boolean _count$isSet;
  public long getCount() { return this._count; }
  public GetCategoriesResponse setCount(long val) {
    this._count = val;
    _count$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_categories != null) {
      builder.array(CATEGORIES.getPreferredName(), _categories);
    }
    if (_count$isSet) {
      builder.field(COUNT.getPreferredName(), _count);
    }
  }

  @Override
  public GetCategoriesResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetCategoriesResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetCategoriesResponse, Void> PARSER =
    new ObjectParser<>(GetCategoriesResponse.class.getName(), false, GetCategoriesResponse::new);

  static {
    PARSER.declareObjectArray(GetCategoriesResponse::setCategories, (p, t) -> CategoryDefinition.PARSER.apply(p, t), CATEGORIES);
    PARSER.declareLong(GetCategoriesResponse::setCount, COUNT);
  }

}
