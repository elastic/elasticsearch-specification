
package org.elasticsearch.x_pack.machine_learning.get_categories;

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
import org.elasticsearch.x_pack.machine_learning.job.results.*;
import org.elasticsearch.internal.*;

public class GetCategoriesResponse  implements XContentable<GetCategoriesResponse> {
  
  static final ParseField CATEGORIES = new ParseField("categories");
  private List<CategoryDefinition> _categories;
  public List<CategoryDefinition> getCategories() { return this._categories; }
  public GetCategoriesResponse setCategories(List<CategoryDefinition> val) { this._categories = val; return this; }


  static final ParseField COUNT = new ParseField("count");
  private Long _count;
  public Long getCount() { return this._count; }
  public GetCategoriesResponse setCount(Long val) { this._count = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_categories != null) {
      builder.array(CATEGORIES.getPreferredName(), _categories);
    }
    if (_count != null) {
      builder.field(COUNT.getPreferredName(), _count);
    }
    builder.endObject();
    return builder;
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
