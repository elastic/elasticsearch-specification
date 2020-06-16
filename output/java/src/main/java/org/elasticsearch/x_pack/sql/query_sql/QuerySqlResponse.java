
package org.elasticsearch.x_pack.sql.query_sql;

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
import org.elasticsearch.x_pack.sql.query_sql.*;

public class QuerySqlResponse  implements XContentable<QuerySqlResponse> {
  
  static final ParseField COLUMNS = new ParseField("columns");
  private List<SqlColumn> _columns;
  public List<SqlColumn> getColumns() { return this._columns; }
  public QuerySqlResponse setColumns(List<SqlColumn> val) { this._columns = val; return this; }


  static final ParseField CURSOR = new ParseField("cursor");
  private String _cursor;
  public String getCursor() { return this._cursor; }
  public QuerySqlResponse setCursor(String val) { this._cursor = val; return this; }


  static final ParseField ROWS = new ParseField("rows");
  private List<List<SqlValue>> _rows;
  public List<List<SqlValue>> getRows() { return this._rows; }
  public QuerySqlResponse setRows(List<List<SqlValue>> val) { this._rows = val; return this; }


  static final ParseField VALUES = new ParseField("values");
  private List<List<SqlValue>> _values;
  public List<List<SqlValue>> getValues() { return this._values; }
  public QuerySqlResponse setValues(List<List<SqlValue>> val) { this._values = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_columns != null) {
      builder.array(COLUMNS.getPreferredName(), _columns);
    }
    if (_cursor != null) {
      builder.field(CURSOR.getPreferredName(), _cursor);
    }
    if (_rows != null) {
      builder.array(ROWS.getPreferredName(), _rows);
    }
    if (_values != null) {
      builder.array(VALUES.getPreferredName(), _values);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public QuerySqlResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return QuerySqlResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<QuerySqlResponse, Void> PARSER =
    new ObjectParser<>(QuerySqlResponse.class.getName(), false, QuerySqlResponse::new);

  static {
    PARSER.declareObjectArray(QuerySqlResponse::setColumns, (p, t) -> SqlColumn.PARSER.apply(p, t), COLUMNS);
    PARSER.declareString(QuerySqlResponse::setCursor, CURSOR);
    PARSER.declareObjectArray(QuerySqlResponse::setRows, (p, t) -> null /* TODO List<SqlValue> */, ROWS);
    PARSER.declareObjectArray(QuerySqlResponse::setValues, (p, t) -> null /* TODO List<SqlValue> */, VALUES);
  }

}
