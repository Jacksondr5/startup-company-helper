export interface StartupComponent {
  type: StartupComponentType;
  name: StartupComponentName;
  productionCost: Number;
  //Needed because API module is out of order
  sortOrder: Number;
  employee: StartupEmployeeType;
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

//Values are for sorting
export enum StartupEmployeeType {
  Developer = 0,
  Designer = 1,
  LeadDeveloper = 2,
  SysAdmin = 3,
  Marketer = 4
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

//Developer Components
export const UIComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.UIComponent,
  productionCost: 2,
  sortOrder: 0,
  employee: StartupEmployeeType.Developer,
  recipe: []
};
export const BackendComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.BackendComponent,
  productionCost: 4,
  sortOrder: 1,
  employee: StartupEmployeeType.Developer,
  recipe: []
};
export const NetworkComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.NetworkComponent,
  productionCost: 6,
  sortOrder: 2,
  employee: StartupEmployeeType.Developer,
  recipe: []
};
export const DatabaseComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.DatabaseComponent,
  productionCost: 4,
  sortOrder: 3,
  employee: StartupEmployeeType.Developer,
  recipe: []
};
export const VideoComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.VideoComponent,
  productionCost: 14,
  sortOrder: 4,
  employee: StartupEmployeeType.Developer,
  recipe: []
};
export const SemanticComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.SemanticComponent,
  productionCost: 3,
  sortOrder: 5,
  employee: StartupEmployeeType.Developer,
  recipe: []
};
export const SmtpComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.SmtpComponent,
  productionCost: 8,
  sortOrder: 6,
  employee: StartupEmployeeType.Developer,
  recipe: []
};
export const EncryptionComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.EncryptionComponent,
  productionCost: 8,
  sortOrder: 7,
  employee: StartupEmployeeType.Developer,
  recipe: []
};
export const FilesystemComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.FilesystemComponent,
  productionCost: 4,
  sortOrder: 8,
  employee: StartupEmployeeType.Developer,
  recipe: []
};
export const I18nComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.I18nComponent,
  productionCost: 4,
  sortOrder: 9,
  employee: StartupEmployeeType.Developer,
  recipe: []
};
export const SearchAlgorithmComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.SearchAlgorithmComponent,
  productionCost: 12,
  sortOrder: 10,
  employee: StartupEmployeeType.Developer,
  recipe: []
};
export const CompressionComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.CompressionComponent,
  productionCost: 8,
  sortOrder: 8,
  employee: StartupEmployeeType.Developer,
  recipe: []
};

//Designer Components
export const BlueprintComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.BlueprintComponent,
  productionCost: 2,
  sortOrder: 0,
  employee: StartupEmployeeType.Designer,
  recipe: []
};
export const WireframeComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.WireframeComponent,
  productionCost: 3,
  sortOrder: 1,
  employee: StartupEmployeeType.Designer,
  recipe: []
};
export const GraphicsComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.GraphicsComponent,
  productionCost: 4,
  sortOrder: 2,
  employee: StartupEmployeeType.Designer,
  recipe: []
};
export const UIElementModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.UIElementModule,
  productionCost: 6,
  sortOrder: 3,
  employee: StartupEmployeeType.Designer,
  recipe: [
    { component: BlueprintComponent, count: 1 },
    { component: GraphicsComponent, count: 1 }
  ]
};
export const UISetModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.UISetModule,
  productionCost: 18,
  sortOrder: 4,
  employee: StartupEmployeeType.Designer,
  recipe: [
    { component: WireframeComponent, count: 2 },
    { component: UIElementModule, count: 2 }
  ]
};
export const ResponsiveUIModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.ResponsiveUIModule,
  productionCost: 18,
  sortOrder: 5,
  employee: StartupEmployeeType.Designer,
  recipe: [
    { component: WireframeComponent, count: 2 },
    { component: UIElementModule, count: 2 }
  ]
};
export const DocumentationComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.DocumentationComponent,
  productionCost: 12,
  sortOrder: 6,
  employee: StartupEmployeeType.Designer,
  recipe: []
};
export const DesignGuidelinesModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.DesignGuidelinesModule,
  productionCost: 90,
  sortOrder: 7,
  employee: StartupEmployeeType.Designer,
  recipe: [
    { component: DocumentationComponent, count: 3 },
    { component: ResponsiveUIModule, count: 3 }
  ]
};

//SysAdmin Components
export const VirtualHardwareComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.VirtualHardwareComponent,
  productionCost: 4,
  sortOrder: 0,
  employee: StartupEmployeeType.SysAdmin,
  recipe: []
};
export const OperatingSystemComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.OperatingSystemComponent,
  productionCost: 4,
  sortOrder: 1,
  employee: StartupEmployeeType.SysAdmin,
  recipe: []
};
export const FirewallComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.FirewallComponent,
  productionCost: 4,
  sortOrder: 2,
  employee: StartupEmployeeType.SysAdmin,
  recipe: []
};
export const ProcessManagementComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.ProcessManagementComponent,
  productionCost: 6,
  sortOrder: 3,
  employee: StartupEmployeeType.SysAdmin,
  recipe: []
};
export const ContinuousIntegrationComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.ContinuousIntegrationComponent,
  productionCost: 8,
  sortOrder: 4,
  employee: StartupEmployeeType.SysAdmin,
  recipe: []
};
export const CronJobComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.CronJobComponent,
  productionCost: 3,
  sortOrder: 5,
  employee: StartupEmployeeType.SysAdmin,
  recipe: []
};
export const VirtualContainerModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.VirtualContainerModule,
  productionCost: 25,
  sortOrder: 6,
  employee: StartupEmployeeType.SysAdmin,
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
  productionCost: 115,
  sortOrder: 7,
  employee: StartupEmployeeType.SysAdmin,
  recipe: [
    { component: VirtualContainerModule, count: 3 },
    { component: FirewallComponent, count: 10 }
  ]
};
export const SwarmManagementModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.SwarmManagementModule,
  productionCost: 140,
  sortOrder: 8,
  employee: StartupEmployeeType.SysAdmin,
  recipe: [
    { component: ClusterModule, count: 1 },
    { component: VirtualContainerModule, count: 1 }
  ]
};

//LeadDev components
export const InterfaceModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.InterfaceModule,
  productionCost: 15,
  sortOrder: 0,
  employee: StartupEmployeeType.LeadDeveloper,
  recipe: [
    { component: UIElementModule, count: 2 },
    { component: WireframeComponent, count: 1 }
  ]
};
export const FrontendModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.FrontendModule,
  productionCost: 21,
  sortOrder: 1,
  employee: StartupEmployeeType.LeadDeveloper,
  recipe: [
    { component: UIElementModule, count: 1 },
    { component: InterfaceModule, count: 1 }
  ]
};
export const BackendModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.BackendModule,
  productionCost: 10,
  sortOrder: 2,
  employee: StartupEmployeeType.LeadDeveloper,
  recipe: [
    { component: BackendComponent, count: 1 },
    { component: NetworkComponent, count: 1 }
  ]
};
export const InputModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.InputModule,
  productionCost: 6,
  sortOrder: 3,
  employee: StartupEmployeeType.LeadDeveloper,
  recipe: [
    { component: UIComponent, count: 1 },
    { component: BackendComponent, count: 1 }
  ]
};
export const StorageModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.StorageModule,
  productionCost: 8,
  sortOrder: 4,
  employee: StartupEmployeeType.LeadDeveloper,
  recipe: [
    { component: FilesystemComponent, count: 1 },
    { component: BackendComponent, count: 1 }
  ]
};
export const ContentManagementModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.ContentManagementModule,
  productionCost: 37,
  sortOrder: 5,
  employee: StartupEmployeeType.LeadDeveloper,
  recipe: [
    { component: FrontendModule, count: 1 },
    { component: InputModule, count: 1 },
    { component: BackendModule, count: 1 }
  ]
};
export const VideoPlaybackModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.VideoPlaybackModule,
  productionCost: 45,
  sortOrder: 6,
  employee: StartupEmployeeType.LeadDeveloper,
  recipe: [
    { component: VideoComponent, count: 1 },
    { component: FrontendModule, count: 1 },
    { component: BackendModule, count: 1 }
  ]
};
export const SeoModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.SeoModule,
  productionCost: 24,
  sortOrder: 7,
  employee: StartupEmployeeType.LeadDeveloper,
  recipe: [
    { component: FrontendModule, count: 1 },
    { component: SemanticComponent, count: 1 }
  ]
};
export const EmailModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.EmailModule,
  productionCost: 12,
  sortOrder: 8,
  employee: StartupEmployeeType.LeadDeveloper,
  recipe: [
    { component: SmtpComponent, count: 1 },
    { component: BackendComponent, count: 1 }
  ]
};
export const DatabaseLayerModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.DatabaseLayerModule,
  productionCost: 14,
  sortOrder: 9,
  employee: StartupEmployeeType.LeadDeveloper,
  recipe: [
    { component: DatabaseComponent, count: 1 },
    { component: BackendComponent, count: 1 },
    { component: NetworkComponent, count: 1 }
  ]
};
export const NotificationModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.NotificationModule,
  productionCost: 18,
  sortOrder: 10,
  employee: StartupEmployeeType.LeadDeveloper,
  recipe: [
    { component: UIComponent, count: 1 },
    { component: BackendComponent, count: 1 },
    { component: EmailModule, count: 1 }
  ]
};
export const AuthenticationModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.AuthenticationModule,
  productionCost: 22,
  sortOrder: 11,
  employee: StartupEmployeeType.LeadDeveloper,
  recipe: [
    { component: DatabaseComponent, count: 1 },
    { component: EncryptionComponent, count: 1 },
    { component: BackendModule, count: 1 }
  ]
};
export const ApiClientModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.ApiClientModule,
  productionCost: 40,
  sortOrder: 17,
  employee: StartupEmployeeType.LeadDeveloper,
  recipe: [
    { component: BackendModule, count: 1 },
    { component: DatabaseLayerModule, count: 1 },
    { component: CompressionComponent, count: 2 }
  ]
};
export const PaymentGatewayModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.PaymentGatewayModule,
  productionCost: 76,
  sortOrder: 12,
  employee: StartupEmployeeType.LeadDeveloper,
  recipe: [
    { component: DatabaseLayerModule, count: 1 },
    { component: ApiClientModule, count: 1 },
    { component: AuthenticationModule, count: 1 }
  ]
};
export const LocalizationModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.LocalizationModule,
  productionCost: 25,
  sortOrder: 13,
  employee: StartupEmployeeType.LeadDeveloper,
  recipe: [
    { component: I18nComponent, count: 1 },
    { component: FrontendModule, count: 1 }
  ]
};
export const SearchModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.SearchModule,
  productionCost: 20,
  sortOrder: 14,
  employee: StartupEmployeeType.LeadDeveloper,
  recipe: [
    { component: DatabaseComponent, count: 1 },
    { component: SearchAlgorithmComponent, count: 1 },
    { component: BackendComponent, count: 1 }
  ]
};
export const BandwidthCompressionModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.BandwidthCompressionModule,
  productionCost: 18,
  sortOrder: 15,
  employee: StartupEmployeeType.LeadDeveloper,
  recipe: [
    { component: CompressionComponent, count: 1 },
    { component: NetworkComponent, count: 1 },
    { component: BackendComponent, count: 1 }
  ]
};
export const CodeOptimizationModule: StartupComponent = {
  type: StartupComponentType.Module,
  name: StartupComponentName.CodeOptimizationModule,
  productionCost: 90,
  sortOrder: 16,
  employee: StartupEmployeeType.LeadDeveloper,
  recipe: [
    { component: BackendModule, count: 2 },
    { component: DatabaseLayerModule, count: 2 },
    { component: FrontendModule, count: 2 }
  ]
};

//Marketing Components
export const CopywritingComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.CopywritingComponent,
  productionCost: 4,
  sortOrder: 0,
  employee: StartupEmployeeType.LeadDeveloper,
  recipe: []
};
export const TextFormatComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.TextFormatComponent,
  productionCost: 4,
  sortOrder: 1,
  employee: StartupEmployeeType.LeadDeveloper,
  recipe: []
};
export const ImageFormatComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.ImageFormatComponent,
  productionCost: 4,
  sortOrder: 2,
  employee: StartupEmployeeType.LeadDeveloper,
  recipe: []
};
export const UserFeedbackComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.UserFeedbackComponent,
  productionCost: 8,
  sortOrder: 3,
  employee: StartupEmployeeType.LeadDeveloper,
  recipe: []
};
export const SurveyComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.SurveyComponent,
  productionCost: 4,
  sortOrder: 4,
  employee: StartupEmployeeType.LeadDeveloper,
  recipe: []
};
export const PhoneInterviewComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.PhoneInterviewComponent,
  productionCost: 6,
  sortOrder: 5,
  employee: StartupEmployeeType.LeadDeveloper,
  recipe: []
};
export const VideoFormatComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.VideoFormatComponent,
  productionCost: 8,
  sortOrder: 6,
  employee: StartupEmployeeType.LeadDeveloper,
  recipe: []
};
export const AudioFormatComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.AudioFormatComponent,
  productionCost: 8,
  sortOrder: 7,
  employee: StartupEmployeeType.LeadDeveloper,
  recipe: []
};
export const AnalyticsResearchComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.AnalyticsResearchComponent,
  productionCost: 12,
  sortOrder: 8,
  employee: StartupEmployeeType.LeadDeveloper,
  recipe: []
};
export const ContractAgreementComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.ContractAgreementComponent,
  productionCost: 12,
  sortOrder: 9,
  employee: StartupEmployeeType.LeadDeveloper,
  recipe: []
};
export const ABTestingComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.ABTestingComponent,
  productionCost: 10,
  sortOrder: 10,
  employee: StartupEmployeeType.LeadDeveloper,
  recipe: []
};
export const BehaviorObservationComponent: StartupComponent = {
  type: StartupComponentType.Component,
  name: StartupComponentName.BehaviorObservationComponent,
  productionCost: 12,
  sortOrder: 11,
  employee: StartupEmployeeType.LeadDeveloper,
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
