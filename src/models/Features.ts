import {
  BackendModule,
  InputModule,
  FrontendModule,
  DatabaseLayerModule,
  StorageModule,
  PaymentGatewayModule,
  EmailModule,
  StartupRecipePart,
  UIComponent,
  BackendComponent,
  BlueprintComponent,
  GraphicsComponent,
  NetworkComponent,
  ContentManagementModule,
  UISetModule,
  DesignGuidelinesModule,
  ApiClientModule,
  NotificationModule,
  CodeOptimizationModule,
  FirewallComponent,
  VirtualHardwareComponent,
  OperatingSystemComponent,
  ProcessManagementComponent,
  CronJobComponent,
  ContinuousIntegrationComponent,
  ClusterModule,
  SwarmManagementModule,
  VirtualContainerModule
} from './Components';

export interface StartupFeature {
  name: StartupFeatureType;
  recipe: StartupRecipePart[];
}

export enum StartupFeatureType {
  LandingPage = 'LandingPage',
  ItemListing = 'ItemListing',
  CommentFunctionality = 'CommentFunctionality',
  SharingFunctionality = 'SharingFunctionality',
  ImageUpload = 'ImageUpload',
  PaymentSystem = 'PaymentSystem',
  ChatSystem = 'ChatSystem',
  AdBlockerObfuscator = 'AdBlockerObfuscator',
  SmallServer = 'SmallServer',
  TwoUServer = 'TwoUServer',
  BladeServer = 'BladeServer',
  XServer = 'XServer'
  // LiveStreaming = 'LiveStreaming',
  // OfflineContent = 'OfflineContent',
  // VideoEditor = 'VideoEditor',
  // VideoFunctionality = 'VideoFunctionality'
}

export const LandingPageFeature: StartupFeature = {
  name: StartupFeatureType.LandingPage,
  recipe: [
    { component: UIComponent, count: 1 },
    { component: BackendComponent, count: 1 },
    { component: BlueprintComponent, count: 1 },
    { component: GraphicsComponent, count: 1 }
  ]
};
export const ItemListingFeature: StartupFeature = {
  name: StartupFeatureType.ItemListing,
  recipe: [
    { component: BackendModule, count: 1 },
    { component: FrontendModule, count: 1 },
    { component: ContentManagementModule, count: 1 }
  ]
};
export const CommentFunctionality: StartupFeature = {
  name: StartupFeatureType.CommentFunctionality,
  recipe: [
    { component: BackendModule, count: 3 },
    { component: InputModule, count: 3 }
  ]
};
export const SharingFunctionalityFeature: StartupFeature = {
  name: StartupFeatureType.SharingFunctionality,
  recipe: [
    { component: BackendModule, count: 2 },
    { component: FrontendModule, count: 1 },
    { component: InputModule, count: 1 },
    { component: EmailModule, count: 2 },
    { component: UISetModule, count: 1 }
  ]
};
export const ImageUploadFeature: StartupFeature = {
  name: StartupFeatureType.ImageUpload,
  recipe: [
    { component: InputModule, count: 1 },
    { component: StorageModule, count: 2 },
    { component: DatabaseLayerModule, count: 2 },
    { component: FrontendModule, count: 1 },
    { component: UISetModule, count: 1 }
  ]
};
export const PaymentSystemFeature: StartupFeature = {
  name: StartupFeatureType.PaymentSystem,
  recipe: [
    { component: DatabaseLayerModule, count: 2 },
    { component: FrontendModule, count: 1 },
    { component: PaymentGatewayModule, count: 1 },
    { component: EmailModule, count: 1 },
    { component: DesignGuidelinesModule, count: 1 }
  ]
};
export const ChatSystemFeature: StartupFeature = {
  name: StartupFeatureType.ChatSystem,
  recipe: [
    { component: DatabaseLayerModule, count: 1 },
    { component: InputModule, count: 1 },
    { component: NotificationModule, count: 2 },
    { component: NetworkComponent, count: 3 },
    { component: ApiClientModule, count: 2 },
    { component: DesignGuidelinesModule, count: 1 }
  ]
};
export const AdBlockerObfuscatorFeature: StartupFeature = {
  name: StartupFeatureType.AdBlockerObfuscator,
  recipe: [
    { component: CodeOptimizationModule, count: 2 },
    { component: UISetModule, count: 4 },
    { component: ApiClientModule, count: 2 }
  ]
};

export const SmallServerFeature: StartupFeature = {
  name: StartupFeatureType.SmallServer,
  recipe: [
    { component: FirewallComponent, count: 2 },
    { component: VirtualHardwareComponent, count: 2 },
    { component: OperatingSystemComponent, count: 2 }
  ]
};

export const TwoUServerFeature: StartupFeature = {
  name: StartupFeatureType.TwoUServer,
  recipe: [
    { component: FirewallComponent, count: 4 },
    { component: VirtualHardwareComponent, count: 4 },
    { component: OperatingSystemComponent, count: 4 },
    { component: ProcessManagementComponent, count: 2 },
    { component: CronJobComponent, count: 2 }
  ]
};
export const BladeServerFeature: StartupFeature = {
  name: StartupFeatureType.BladeServer,
  recipe: [
    { component: FirewallComponent, count: 15 },
    { component: VirtualHardwareComponent, count: 15 },
    { component: OperatingSystemComponent, count: 15 },
    { component: ProcessManagementComponent, count: 4 },
    { component: CronJobComponent, count: 4 },
    { component: ContinuousIntegrationComponent, count: 4 }
  ]
};
export const XServerFeature: StartupFeature = {
  name: StartupFeatureType.XServer,
  recipe: [
    { component: VirtualContainerModule, count: 8 },
    { component: ClusterModule, count: 5 },
    { component: SwarmManagementModule, count: 5 }
  ]
};
export const AllFeatures: StartupFeature[] = [
  LandingPageFeature,
  ItemListingFeature,
  CommentFunctionality,
  SharingFunctionalityFeature,
  ImageUploadFeature,
  PaymentSystemFeature,
  ChatSystemFeature,
  AdBlockerObfuscatorFeature,
  SmallServerFeature,
  TwoUServerFeature,
  BladeServerFeature,
  XServerFeature
];
