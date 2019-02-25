export interface StartupComponent {
  type: StartupComponentType;
  name: StartupComponentName;
  recipe: StartupRecipePart[];
}

export interface StartupRecipePart {
  component: StartupComponent;
  count: number;
}

export enum StartupComponentType {
  Component,
  Module
}

export enum StartupComponentName {
  BlueprintComponent = 'BlueprintComponent',
  WireframeComponent = 'WireframeComponent',
  GraphicsComponent = 'GraphicsComponent',
  UIComponent = 'UIComponent',
  BackendComponent = 'BackendComponent',
  NetworkComponent = 'NetworkComponent',
  DatabaseComponent = 'DatabaseComponent',
  EncryptionComponent = 'EncryptionComponent',
  FilesystemComponent = 'FilesystemComponent',
  SemanticComponent = 'SemanticComponent',
  VideoComponent = 'VideoComponent',
  SmtpComponent = 'SmtpComponent',
  I18nComponent = 'I18nComponent',
  SearchAlgorithmComponent = 'SearchAlgorithmComponent',
  CompressionComponent = 'CompressionComponent',
  InterfaceModule = 'InterfaceModule',
  FrontendModule = 'FrontendModule',
  BackendModule = 'BackendModule',
  InputModule = 'InputModule',
  StorageModule = 'StorageModule',
  AuthenticationModule = 'AuthenticationModule',
  ContentManagementModule = 'ContentManagementModule',
  SeoModule = 'SeoModule',
  ApiClientModule = 'ApiClientModule',
  VideoPlaybackModule = 'VideoPlaybackModule',
  EmailModule = 'EmailModule',
  DatabaseLayerModule = 'DatabaseLayerModule',
  NotificationModule = 'NotificationModule',
  PaymentGatewayModule = 'PaymentGatewayModule',
  LocalizationModule = 'LocalizationModule',
  SearchModule = 'SearchModule',
  BandwidthCompressionModule = 'BandwidthCompressionModule'
}

export const BlueprintComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.BlueprintComponent,
  recipe: []
};
export const WireframeComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.WireframeComponent,
  recipe: []
};
export const GraphicsComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.GraphicsComponent,
  recipe: []
};
export const UIComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.UIComponent,
  recipe: []
};
export const BackendComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.BackendComponent,
  recipe: []
};
export const NetworkComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.NetworkComponent,
  recipe: []
};
export const DatabaseComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.DatabaseComponent,
  recipe: []
};
export const EncryptionComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.EncryptionComponent,
  recipe: []
};
export const FilesystemComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.FilesystemComponent,
  recipe: []
};
export const SemanticComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.SemanticComponent,
  recipe: []
};
export const VideoComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.VideoComponent,
  recipe: []
};
export const SmtpComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.SmtpComponent,
  recipe: []
};
export const I18nComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.I18nComponent,
  recipe: []
};
export const SearchAlgorithmComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.SearchAlgorithmComponent,
  recipe: []
};
export const CompressionComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.CompressionComponent,
  recipe: []
};

export const InterfaceModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.InterfaceModule,
  recipe: [
    { component: BlueprintComponent, count: 1 },
    { component: WireframeComponent, count: 1 },
    { component: GraphicsComponent, count: 1 }
  ]
};
export const FrontendModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.FrontendModule,
  recipe: [
    { component: UIComponent, count: 1 },
    { component: InterfaceModule, count: 1 }
  ]
};
export const BackendModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.BackendModule,
  recipe: [
    { component: BackendComponent, count: 1 },
    { component: NetworkComponent, count: 1 }
  ]
};
export const InputModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.InputModule,
  recipe: [
    { component: UIComponent, count: 1 },
    { component: BackendComponent, count: 1 }
  ]
};
export const StorageModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.StorageModule,
  recipe: [
    { component: FilesystemComponent, count: 1 },
    { component: BackendComponent, count: 1 }
  ]
};
export const AuthenticationModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.AuthenticationModule,
  recipe: [
    { component: DatabaseComponent, count: 1 },
    { component: EncryptionComponent, count: 1 },
    { component: BackendModule, count: 1 }
  ]
};
export const ContentManagementModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.ContentManagementModule,
  recipe: [
    { component: DatabaseComponent, count: 1 },
    { component: BackendModule, count: 1 }
  ]
};
export const SeoModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.SeoModule,
  recipe: [
    { component: FrontendModule, count: 1 },
    { component: SemanticComponent, count: 1 }
  ]
};
export const ApiClientModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.ApiClientModule,
  recipe: [
    { component: BackendModule, count: 1 },
    { component: NetworkComponent, count: 1 }
  ]
};
export const VideoPlaybackModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.VideoPlaybackModule,
  recipe: [
    { component: VideoComponent, count: 1 },
    { component: FrontendModule, count: 1 },
    { component: BackendModule, count: 1 }
  ]
};
export const EmailModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.EmailModule,
  recipe: [
    { component: SmtpComponent, count: 1 },
    { component: BackendComponent, count: 1 }
  ]
};
export const DatabaseLayerModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.DatabaseLayerModule,
  recipe: [
    { component: DatabaseComponent, count: 1 },
    { component: BackendComponent, count: 1 },
    { component: NetworkComponent, count: 1 }
  ]
};
export const NotificationModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.NotificationModule,
  recipe: [
    { component: UIComponent, count: 1 },
    { component: BackendComponent, count: 1 },
    { component: EmailModule, count: 1 }
  ]
};
export const PaymentGatewayModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.PaymentGatewayModule,
  recipe: [
    { component: BackendModule, count: 1 },
    { component: ApiClientModule, count: 1 }
  ]
};
export const LocalizationModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.LocalizationModule,
  recipe: [
    { component: I18nComponent, count: 1 },
    { component: FrontendModule, count: 1 }
  ]
};
export const SearchModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.SearchModule,
  recipe: [
    { component: DatabaseComponent, count: 1 },
    { component: SearchAlgorithmComponent, count: 1 },
    { component: BackendComponent, count: 1 }
  ]
};
export const BandwidthCompressionModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.BandwidthCompressionModule,
  recipe: [
    { component: CompressionComponent, count: 1 },
    { component: NetworkComponent, count: 1 },
    { component: BackendComponent, count: 1 }
  ]
};

export const AllComponents: StartupComponent[] = [
  BlueprintComponent,
  WireframeComponent,
  GraphicsComponent,
  UIComponent,
  BackendComponent,
  NetworkComponent,
  DatabaseComponent,
  EncryptionComponent,
  FilesystemComponent,
  SemanticComponent,
  VideoComponent,
  SmtpComponent,
  I18nComponent,
  SearchAlgorithmComponent,
  CompressionComponent
];

export const AllModules: StartupComponent[] = [
  InterfaceModule,
  FrontendModule,
  BackendModule,
  InputModule,
  StorageModule,
  AuthenticationModule,
  ContentManagementModule,
  SeoModule,
  ApiClientModule,
  VideoPlaybackModule,
  EmailModule,
  DatabaseLayerModule,
  NotificationModule,
  PaymentGatewayModule,
  LocalizationModule,
  SearchModule,
  BandwidthCompressionModule
];

export const AllComponentsAndModules = AllComponents.concat(AllModules);
