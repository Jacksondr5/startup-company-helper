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
  UIComponent = 'UIComponent',
  BackendComponent = 'BackendComponent',
  NetworkComponent = 'NetworkComponent',
  DatabaseComponent = 'DatabaseComponent',
  VideoComponent = 'VideoComponent',
  BlueprintComponent = 'BlueprintComponent',
  WireframeComponent = 'WireframeComponent',
  GraphicsComponent = 'GraphicsComponent',
  UIElementModule = 'UIElementModule',
  VirtualHardwareComponent = 'VirtualHardwareComponent',
  OperatingSystemComponent = 'OperatingSystemComponent',
  FirewallComponent = 'FirewallComponent',
  InterfaceModule = 'InterfaceModule',
  FrontendModule = 'FrontendModule',
  BackendModule = 'BackendModule',
  InputModule = 'InputModule',
  StorageModule = 'StorageModule',
  ContentManagementModule = 'ContentManagementModule',
  VideoPlaybackModule = 'VideoPlaybackModule',
  SemanticComponent = 'SemanticComponent',
  SmtpComponent = 'SmtpComponent',
  EncryptionComponent = 'EncryptionComponent',
  FilesystemComponent = 'FilesystemComponent',
  SeoModule = 'SeoModule',
  EmailModule = 'EmailModule',
  DatabaseLayerModule = 'DatabaseLayerModule',
  NotificationModule = 'NotificationModule',
  AuthenticationModule = 'AuthenticationModule',
  UISetModule = 'UISetModule',
  ResponsiveUIModule = 'REsponsiveUIModule',
  CopywritingComponent = 'CopywritingComponent',
  TextFormatComponent = 'TextFormatComponent',
  ImageFormatComponent = 'ImageFormatComponent',
  UserFeedbackComponent = 'UserFeedbackComponent',
  SurveyComponent = 'SurveyComponent',
  PhoneInterviewComponent = 'PhoneInterviewComponent',
  ProcessManagementComponent = 'ProcessManagementComponent',
  ContinuousIntegrationComponent = 'ContinuousIntegrationComponent',
  CronJobComponent = 'CronJobComponent',
  I18nComponent = 'I18nComponent',
  SearchAlgorithmComponent = 'SearchAlgorithmComponent',
  CompressionComponent = 'CompressionComponent',
  PaymentGatewayModule = 'PaymentGatewayModule',
  LocalizationModule = 'LocalizationModule',
  SearchModule = 'SearchModule',
  BandwidthCompressionModule = 'BandwidthCompressionModule',
  CodeOptimizationModule = 'CodeOptimizationModule',
  ApiClientModule = 'ApiClientModule',
  DocumentationComponent = 'DocumentationComponent',
  DesignGuidelinesModule = 'DesignGuidelinesModule',
  VideoFormatComponent = 'VideoFormatComponent',
  AudioFormatComponent = 'AudioFormatComponent',
  AnalyticsResearchComponent = 'AnalyticsResearchComponent',
  VirtualContainerModule = 'VirtualContainerModule',
  ClusterModule = 'ClusterModule',
  SwarmManagementModule = 'SwarmManagementModule',
  ContractAgreementComponent = 'ContractAgreementComponent',
  ABTestingComponent = 'ABTestingComponent',
  BehaviorObservationComponent = 'BehaviorObservationComponent'
}

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
export const VideoComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.VideoComponent,
  recipe: []
};
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
export const UIElementModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.UIElementModule,
  recipe: [
    { component: BlueprintComponent, count: 1 },
    { component: GraphicsComponent, count: 1 }
  ]
};
export const VirtualHardwareComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.VirtualHardwareComponent,
  recipe: []
};
export const OperatingSystemComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.OperatingSystemComponent,
  recipe: []
};
export const FirewallComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.FirewallComponent,
  recipe: []
};
export const InterfaceModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.InterfaceModule,
  recipe: [
    { component: UIElementModule, count: 2 },
    { component: WireframeComponent, count: 1 }
  ]
};
export const FrontendModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.FrontendModule,
  recipe: [
    { component: UIElementModule, count: 1 },
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
export const FilesystemComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.FilesystemComponent,
  recipe: []
};
export const StorageModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.StorageModule,
  recipe: [
    { component: FilesystemComponent, count: 1 },
    { component: BackendComponent, count: 1 }
  ]
};
export const ContentManagementModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.ContentManagementModule,
  recipe: [
    { component: FrontendModule, count: 1 },
    { component: InputModule, count: 1 },
    { component: BackendModule, count: 1 }
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
export const SemanticComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.SemanticComponent,
  recipe: []
};
export const SmtpComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.SmtpComponent,
  recipe: []
};
export const EncryptionComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.EncryptionComponent,
  recipe: []
};

export const SeoModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.SeoModule,
  recipe: [
    { component: FrontendModule, count: 1 },
    { component: SemanticComponent, count: 1 }
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
export const AuthenticationModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.AuthenticationModule,
  recipe: [
    { component: DatabaseComponent, count: 1 },
    { component: EncryptionComponent, count: 1 },
    { component: BackendModule, count: 1 }
  ]
};
export const UISetModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.UISetModule,
  recipe: [
    { component: WireframeComponent, count: 2 },
    { component: UIElementModule, count: 2 }
  ]
};
export const ResponsiveUIModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.ResponsiveUIModule,
  recipe: [
    { component: WireframeComponent, count: 2 },
    { component: UIElementModule, count: 2 }
  ]
};
export const CopywritingComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.CopywritingComponent,
  recipe: []
};
export const TextFormatComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.TextFormatComponent,
  recipe: []
};
export const ImageFormatComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.ImageFormatComponent,
  recipe: []
};
export const UserFeedbackComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.UserFeedbackComponent,
  recipe: []
};
export const SurveyComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.SurveyComponent,
  recipe: []
};
export const PhoneInterviewComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.PhoneInterviewComponent,
  recipe: []
};
export const ProcessManagementComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.ProcessManagementComponent,
  recipe: []
};
export const ContinuousIntegrationComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.ContinuousIntegrationComponent,
  recipe: []
};
export const CronJobComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.CronJobComponent,
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
export const ApiClientModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.ApiClientModule,
  recipe: [
    { component: BackendModule, count: 1 },
    { component: DatabaseLayerModule, count: 1 },
    { component: CompressionComponent, count: 2 }
  ]
};
export const PaymentGatewayModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.PaymentGatewayModule,
  recipe: [
    { component: DatabaseLayerModule, count: 1 },
    { component: ApiClientModule, count: 1 },
    { component: AuthenticationModule, count: 1 }
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
export const CodeOptimizationModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.CodeOptimizationModule,
  recipe: [
    { component: BackendModule, count: 2 },
    { component: DatabaseLayerModule, count: 2 },
    { component: FrontendModule, count: 2 }
  ]
};

export const DocumentationComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.DocumentationComponent,
  recipe: []
};
export const DesignGuidelinesModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.DesignGuidelinesModule,
  recipe: [
    { component: DocumentationComponent, count: 3 },
    { component: ResponsiveUIModule, count: 3 }
  ]
};
export const VideoFormatComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.VideoFormatComponent,
  recipe: []
};
export const AudioFormatComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.AudioFormatComponent,
  recipe: []
};
export const AnalyticsResearchComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.AnalyticsResearchComponent,
  recipe: []
};
export const VirtualContainerModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.VirtualContainerModule,
  recipe: [
    { component: VirtualHardwareComponent, count: 1 },
    { component: OperatingSystemComponent, count: 1 },
    { component: ProcessManagementComponent, count: 1 },
    { component: ContinuousIntegrationComponent, count: 1 },
    { component: CronJobComponent, count: 1 }
  ]
};
export const ClusterModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.ClusterModule,
  recipe: [
    { component: VirtualContainerModule, count: 3 },
    { component: FirewallComponent, count: 10 }
  ]
};
export const SwarmManagementModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.SwarmManagementModule,
  recipe: [
    { component: ClusterModule, count: 1 },
    { component: VirtualContainerModule, count: 1 }
  ]
};
export const ContractAgreementComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.ContractAgreementComponent,
  recipe: []
};
export const ABTestingComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.ABTestingComponent,
  recipe: []
};
export const BehaviorObservationComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.BehaviorObservationComponent,
  recipe: []
};

export const AllComponents: StartupComponent[] = [
  UIComponent,
  BackendComponent,
  NetworkComponent,
  DatabaseComponent,
  VideoComponent,
  BlueprintComponent,
  WireframeComponent,
  GraphicsComponent,
  VirtualHardwareComponent,
  OperatingSystemComponent,
  FirewallComponent,
  FilesystemComponent,
  SemanticComponent,
  SmtpComponent,
  EncryptionComponent,
  CopywritingComponent,
  TextFormatComponent,
  ImageFormatComponent,
  UserFeedbackComponent,
  SurveyComponent,
  PhoneInterviewComponent,
  ProcessManagementComponent,
  ContinuousIntegrationComponent,
  CronJobComponent,
  I18nComponent,
  SearchAlgorithmComponent,
  CompressionComponent,
  DocumentationComponent,
  VideoFormatComponent,
  AudioFormatComponent,
  AnalyticsResearchComponent,
  ContractAgreementComponent,
  ABTestingComponent,
  BehaviorObservationComponent
];

export const AllModules: StartupComponent[] = [
  UIElementModule,
  InterfaceModule,
  FrontendModule,
  BackendModule,
  InputModule,
  StorageModule,
  ContentManagementModule,
  VideoPlaybackModule,
  SeoModule,
  EmailModule,
  DatabaseLayerModule,
  NotificationModule,
  AuthenticationModule,
  UISetModule,
  ResponsiveUIModule,
  ApiClientModule,
  PaymentGatewayModule,
  LocalizationModule,
  SearchModule,
  BandwidthCompressionModule,
  CodeOptimizationModule,
  DesignGuidelinesModule,
  VirtualContainerModule,
  ClusterModule,
  SwarmManagementModule
];

export const AllComponentsAndModules = AllComponents.concat(AllModules);
