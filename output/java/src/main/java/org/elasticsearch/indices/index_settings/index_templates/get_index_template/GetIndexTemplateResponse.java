
package org.elasticsearch.indices.index_settings.index_templates.get_index_template;

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
import org.elasticsearch.indices.index_settings.index_templates.get_index_template.*;
import org.elasticsearch.common_abstractions.response.*;

public class GetIndexTemplateResponse extends DictionaryResponseBase<String, TemplateMapping> implements XContentable<GetIndexTemplateResponse> {
  
  static final ParseField TEMPLATE_MAPPINGS = new ParseField("template_mappings");
  private NamedContainer<String, TemplateMapping> _templateMappings;
  public NamedContainer<String, TemplateMapping> getTemplateMappings() { return this._templateMappings; }
  public GetIndexTemplateResponse setTemplateMappings(NamedContainer<String, TemplateMapping> val) { this._templateMappings = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_templateMappings != null) {
      builder.field(TEMPLATE_MAPPINGS.getPreferredName());
      _templateMappings.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public GetIndexTemplateResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetIndexTemplateResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetIndexTemplateResponse, Void> PARSER =
    new ObjectParser<>(GetIndexTemplateResponse.class.getName(), false, GetIndexTemplateResponse::new);

  static {
    PARSER.declareObject(GetIndexTemplateResponse::setTemplateMappings, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> TemplateMapping.PARSER.apply(pp, null)), TEMPLATE_MAPPINGS);
  }

}
