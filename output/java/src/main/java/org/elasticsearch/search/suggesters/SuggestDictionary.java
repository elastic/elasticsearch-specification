
package org.elasticsearch.search.suggesters;

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
import org.elasticsearch.search.suggesters.*;

public class SuggestDictionary<T>  implements XContentable<SuggestDictionary<T>> {
  
  static final ParseField ITEM = new ParseField("item");
  private List<Suggest<T>> _item;
  public List<Suggest<T>> getItem() { return this._item; }
  public SuggestDictionary<T> setItem(List<Suggest<T>> val) { this._item = val; return this; }


  static final ParseField KEYS = new ParseField("keys");
  private List<String> _keys;
  public List<String> getKeys() { return this._keys; }
  public SuggestDictionary<T> setKeys(List<String> val) { this._keys = val; return this; }


  static final ParseField VALUES = new ParseField("values");
  private List<List<Suggest<T>>> _values;
  public List<List<Suggest<T>>> getValues() { return this._values; }
  public SuggestDictionary<T> setValues(List<List<Suggest<T>>> val) { this._values = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_item != null) {
      builder.array(ITEM.getPreferredName(), _item);
    }
    if (_keys != null) {
      builder.array(KEYS.getPreferredName(), _keys);
    }
    if (_values != null) {
      builder.array(VALUES.getPreferredName(), _values);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SuggestDictionary fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SuggestDictionary.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SuggestDictionary, Void> PARSER =
    new ObjectParser<>(SuggestDictionary.class.getName(), false, SuggestDictionary::new);

  static {
    Suggest _item = new Suggest<>();
    PARSER.declareObjectArray(SuggestDictionary::setItem, (p, t) -> _item.PARSER.apply(p, t), ITEM);
    PARSER.declareStringArray(SuggestDictionary::setKeys, KEYS);
    Suggest _values = new Suggest<>();
    PARSER.declareObjectArray(SuggestDictionary::setValues, (p, t) -> null /* TODO List<_values> */, VALUES);
  }

}
