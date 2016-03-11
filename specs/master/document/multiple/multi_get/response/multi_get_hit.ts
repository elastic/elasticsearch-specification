
/**namespace:Document.Multiple.MultiGet.Response */
interface multi_get_hit<t> {
	Source: t;
	Index: string;
	Found: boolean;
	Type: string;
	Version: long;
	Id: string;
}