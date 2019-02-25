import React, { Component, FormEvent, MouseEvent } from 'react';
import './App.css';
import {
  StartupFeature,
  StartupFeatureType,
  AllFeatures
} from './models/Features';
import FeatureChecklist from './FeatureChecklist';
import {
  StartupComponent,
  StartupComponentType,
  StartupComponentName,
  AllComponentsAndModules,
  StartupRecipePart
} from './models/Components';
import ComponentCard from './ComponentCard';
import { Grid } from '@material-ui/core';

export class StartupFeatureVM implements StartupFeature {
  name: StartupFeatureType;
  recipe: StartupRecipePart[];
  count: number;
  constructor(feature: StartupFeature, checked: number) {
    this.name = feature.name;
    this.recipe = feature.recipe;
    this.count = checked;
  }
}

export class StartupComponentVM implements StartupComponent {
  type: StartupComponentType;
  name: StartupComponentName;
  recipe: StartupRecipePart[];
  count: number;
  imgPath: string;
  constructor(component: StartupComponent, count: number) {
    this.type = component.type;
    this.name = component.name;
    this.recipe = component.recipe;
    this.count = count;
    let iconFolder, iconName;
    if (component.type === StartupComponentType.Module) {
      iconFolder = 'modules';
      iconName = component.name.slice(0, component.name.length - 6);
    } else {
      iconFolder = 'components';
      iconName = component.name.slice(0, component.name.length - 9);
    }
    this.imgPath = `./icons/${iconFolder}/${iconName}.png`;
  }
}

interface State {
  featureVMList: StartupFeatureVM[];
}

function getComponentVMMap(components: StartupComponent[]) {
  let map = new Map<StartupComponentName, StartupComponentVM>();
  for (const component of components) {
    map.set(component.name, new StartupComponentVM(component, 0));
  }
  return map;
}

class App extends Component<{}, State> {
  state: State = {
    featureVMList: AllFeatures.map(feature => new StartupFeatureVM(feature, 0))
  };

  constructor(props: any) {
    super(props);
  }

  render() {
    let componentCountList = getComponentVMMap(AllComponentsAndModules);
    for (const feature of this.state.featureVMList) {
      if (feature.count <= 0) continue;

      for (const recipePiece of feature.recipe) {
        updateComponentCount(componentCountList, recipePiece, feature.count);
      }
    }
    const componentVMs = Array.from(componentCountList.values());
    return (
      <div className="App">
        <FeatureChecklist
          featureVMList={this.state.featureVMList}
          onFeatureListUpdated={this.onFeatureListUpdated}
        />
        <Grid container spacing={8} justify="center" alignItems="stretch">
          {componentVMs.map(componentVM => (
            <Grid key={componentVM.name} item md={1}>
              <ComponentCard
                componentVM={componentVM}
                imgPath={componentVM.imgPath}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }

  onFeatureListUpdated = (name: StartupFeatureType, count: number) => (
    event: MouseEvent<SVGSVGElement>
  ) => {
    //Copy the value because React wipes the event data once we get in setState
    this.setState((prevState: State) => ({
      featureVMList: prevState.featureVMList.map(
        (featureVM: StartupFeatureVM) => {
          if (featureVM.name === name) featureVM.count = count;
          return featureVM;
        }
      )
    }));
  };
}

function updateComponentCount(
  componentCountList: Map<StartupComponentName, StartupComponentVM>,
  recipePiece: StartupRecipePart,
  multiplier: number
): void {
  // componentCountList.set(component.name, componentCountList.get(component.name)!.count - 1)
  let componentInList = componentCountList.get(recipePiece.component.name)!;
  componentInList.count += recipePiece.count * multiplier;
  for (const innerRecipePiece of componentInList.recipe) {
    updateComponentCount(componentCountList, innerRecipePiece, multiplier);
  }
}

export default App;
