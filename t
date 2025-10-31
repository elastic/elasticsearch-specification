// Test file: /test/platinum/voting_only_node/10_basic.yml
// Test name: cluster stats with voting only node stats
{
  "cluster_name": "elasticsearch-x86-64-rest-test",
  "cluster_uuid": "wqQ9NpkhQVGMMqtWjZBWoQ",
  "indices": {
    "search": {
      "extended": {
        "retrievers": {
          "text_similarity_reranker": {
            "chunk_rescorer": 8
          }
        }
      },
      "queries": { ... },
      "rescorers": {
        "query": 8,
        "script": 8
      },
      "retrievers": {
        "knn": 3,
        "random_reranker": 2,
        "rescorer": 5,
        "rrf": 3,
        "rule": 7,
        "standard": 40,
        "text_similarity_reranker": 16
      },
      "sections": { ... },
      "total": 2423
    },
  },
  "status": "green",
  "timestamp": 1759316467252
})

