
/**namespace:Search.Percolator.RegisterPercolator */
/**custom_serialization*/
interface register_percolator_request extends request {
	Metadata: map<string, any>[];
	Query: query_container;
}