using Nest.XPack;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class SlackAttachment  {
		
		[DataMember(Name="author_icon")]
		public string AuthorIcon { get; set; }


		[DataMember(Name="author_link")]
		public string AuthorLink { get; set; }


		[DataMember(Name="author_name")]
		public string AuthorName { get; set; }


		[DataMember(Name="color")]
		public string Color { get; set; }


		[DataMember(Name="fallback")]
		public string Fallback { get; set; }


		[DataMember(Name="fields")]
		public List<SlackAttachmentField> Fields { get; set; }


		[DataMember(Name="footer")]
		public string Footer { get; set; }


		[DataMember(Name="footer_icon")]
		public string FooterIcon { get; set; }


		[DataMember(Name="image_url")]
		public string ImageUrl { get; set; }


		[DataMember(Name="pretext")]
		public string Pretext { get; set; }


		[DataMember(Name="text")]
		public string Text { get; set; }


		[DataMember(Name="thumb_url")]
		public string ThumbUrl { get; set; }


		[DataMember(Name="title")]
		public string Title { get; set; }


		[DataMember(Name="title_link")]
		public string TitleLink { get; set; }


		[DataMember(Name="ts")]
		public DateTimeOffset Ts { get; set; }

	}
}
