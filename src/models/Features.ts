import {
  BackendModule,
  InputModule,
  FrontendModule,
  VideoPlaybackModule,
  BandwidthCompressionModule,
  DatabaseLayerModule,
  StorageModule,
  PaymentGatewayModule,
  EmailModule,
  InterfaceModule,
  StartupRecipePart,
  UIComponent,
  BackendComponent,
  BlueprintComponent,
  GraphicsComponent,
  NetworkComponent
} from './Components';

export interface StartupFeature {
  name: StartupFeatureType;
  recipe: StartupRecipePart[];
}

export enum StartupFeatureType {
  CommentFunctionality = 'CommentFunctionality',
  LandingPage = 'LandingPage',
  LiveStreaming = 'LiveStreaming',
  OfflineContent = 'OfflineContent',
  PaymentSystem = 'PaymentSystem',
  SharingFunctionality = 'SharingFunctionality',
  VideoEditor = 'VideoEditor',
  VideoFunctionality = 'VideoFunctionality'
}

export const CommentFunctionalityFeature: StartupFeature = {
  name: StartupFeatureType.CommentFunctionality,
  recipe: [
    { component: BackendModule, count: 2 },
    { component: InputModule, count: 2 }
  ]
};
export const LandingPageFeature: StartupFeature = {
  name: StartupFeatureType.LandingPage,
  recipe: [
    { component: UIComponent, count: 1 },
    { component: BackendComponent, count: 1 },
    { component: BlueprintComponent, count: 1 },
    { component: GraphicsComponent, count: 1 }
  ]
};
export const LiveStreamingFeature: StartupFeature = {
  name: StartupFeatureType.LiveStreaming,
  recipe: [
    { component: FrontendModule, count: 1 },
    { component: VideoPlaybackModule, count: 1 },
    { component: BandwidthCompressionModule, count: 1 }
  ]
};
export const OfflineContentFeature: StartupFeature = {
  name: StartupFeatureType.OfflineContent,
  recipe: [
    { component: FrontendModule, count: 1 },
    { component: DatabaseLayerModule, count: 1 },
    { component: StorageModule, count: 1 },
    { component: BandwidthCompressionModule, count: 1 }
  ]
};
export const PaymentSystemFeature: StartupFeature = {
  name: StartupFeatureType.PaymentSystem,
  recipe: [
    { component: BackendModule, count: 2 },
    { component: PaymentGatewayModule, count: 1 },
    { component: EmailModule, count: 1 }
  ]
};
export const SharingFunctionalityFeature: StartupFeature = {
  name: StartupFeatureType.SharingFunctionality,
  recipe: [
    { component: BackendModule, count: 1 },
    { component: FrontendModule, count: 1 },
    { component: InputModule, count: 2 }
  ]
};
export const VideoEditorFeature: StartupFeature = {
  name: StartupFeatureType.VideoEditor,
  recipe: [
    { component: VideoPlaybackModule, count: 2 },
    { component: StorageModule, count: 1 },
    { component: BandwidthCompressionModule, count: 1 },
    { component: InterfaceModule, count: 1 },
    { component: BackendModule, count: 3 }
  ]
};
export const VideoFunctionalityFeature: StartupFeature = {
  name: StartupFeatureType.VideoFunctionality,
  recipe: [
    { component: FrontendModule, count: 1 },
    { component: StorageModule, count: 1 },
    { component: NetworkComponent, count: 1 }
  ]
};

export const AllFeatures: StartupFeature[] = [
  CommentFunctionalityFeature,
  LandingPageFeature,
  LiveStreamingFeature,
  OfflineContentFeature,
  PaymentSystemFeature,
  SharingFunctionalityFeature,
  VideoEditorFeature,
  VideoFunctionalityFeature
];
