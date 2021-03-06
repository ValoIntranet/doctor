export interface Page {
  ListItemAllFields: ListItemAllFields;
  CheckInComment: string;
  CheckOutType: number;
  ContentTag: string;
  CustomizedPageStatus: number;
  ETag: string;
  Exists: boolean;
  IrmEnabled: boolean;
  Length: string;
  Level: number;
  LinkingUri?: any;
  LinkingUrl: string;
  MajorVersion: number;
  MinorVersion: number;
  Name: string;
  ServerRelativeUrl: string;
  TimeCreated: string;
  TimeLastModified: string;
  Title: string;
  UIVersion: number;
  UIVersionLabel: string;
  UniqueId: string;
  commentsDisabled: boolean;
  numSections: number;
  numControls: number;
  title: string;
  layoutType: "Home" | "Article";
}

export interface ListItemAllFields {
  CommentsDisabled: boolean;
  FileSystemObjectType: number;
  Id: number;
  ServerRedirectedEmbedUri?: any;
  ServerRedirectedEmbedUrl: string;
  ContentTypeId: string;
  ComplianceAssetId?: any;
  WikiField?: any;
  Title: string;
  ClientSideApplicationId: string;
  PageLayoutType: string;
  CanvasContent1: string;
  BannerImageUrl?: any;
  Description?: any;
  PromotedState: number;
  FirstPublishedDate?: any;
  LayoutWebpartsContent?: any;
  OData__AuthorBylineId?: any;
  _AuthorBylineStringId?: any;
  OData__TopicHeader?: any;
  OData__SPSitePageFlags?: any;
  OData__OriginalSourceUrl?: any;
  OData__OriginalSourceSiteId?: any;
  OData__OriginalSourceWebId?: any;
  OData__OriginalSourceListId?: any;
  OData__OriginalSourceItemId?: any;
  ID: number;
  Created: string;
  AuthorId: number;
  Modified: string;
  EditorId: number;
  OData__CopySource?: any;
  CheckoutUserId?: any;
  OData__UIVersionString: string;
  GUID: string;
}