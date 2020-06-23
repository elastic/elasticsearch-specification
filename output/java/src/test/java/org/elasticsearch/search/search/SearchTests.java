package org.elasticsearch.search.search;

import org.elasticsearch.ElasticsearchClient;
import org.elasticsearch.client.RequestOptions;
import org.elasticsearch.query_dsl.MatchAllQuery;
import org.elasticsearch.query_dsl.abstractions.container.QueryContainer;
import org.elasticsearch.search.search.hits.TotalHitsRelation;
import org.junit.Assert;
import org.junit.Test;

public class SearchTests {

  @Test
  public void X() throws Exception {
    SearchRequest req = new SearchRequest()
      .setQuery(new QueryContainer()
        .setMatchAll(new MatchAllQuery())
      )
      .setFrom(12)
      .setSize(100);

    ElasticsearchClient client = new ElasticsearchClient();
    SearchResponse<Object> search = client.search(req, RequestOptions.DEFAULT);

    Assert.assertEquals(0, (long) search.getHits().getTotal().getValue());
    Assert.assertEquals(TotalHitsRelation.Eq, search.getHits().getTotal().getRelation());

  }

}
