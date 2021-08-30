import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DayModule } from "../day-radio/day/day.module";
import { HeaderComponent } from "../header/header.component";
import { OglavModule } from "../oglavlenie/oglav/oglav.module";
import { SliderWithFourBlocksModule } from "../slider-with-four-blocks/slider-with-four-blocks.module";
import { SliderWithOneBlockCenterModule } from "../slider-with-one-block-center/slider-with-four-blocks.module";
import { SliderWithThreeCenterBlocksModule } from "../slider-with-three-center-blocks/slider-with-four-blocks.module";
import { Slider10Module } from "../slider10/slider10/slider10.module";
import { Slider3Module } from "../slider3/slider3/slider3.module";
import { Slider4Module } from "../slider4/slider4/slider4.module";
import { Slider5Module } from "../slider5/slider5/slider5.module";
import { Slider6Module } from "../slider6/slider6/slider6.module";
import { Slider7Module } from "../slider7/slider7/slider7.module";
import { Slider8Module } from "../slider8/slider8/slider8.module";
import { Slider9Module } from "../slider9/slider9/slider9.module";
import { WithArrowToBottomModule } from "../with-arrow-to-bottom/slider-with-four-blocks.module";
import { WrapperComponent } from "../wrapper/wrapper.component";
import { WrapperRoutingModule } from "../wrapper/wrapper/wrapper/wrapper-routing.module";
import { WrapperModule } from "../wrapper/wrapper/wrapper/wrapper.module";
import { TestComponentForShadrinComponent } from "./test-component-for-shadrin.component";

@NgModule({
    declarations: [TestComponentForShadrinComponent],
    exports: [TestComponentForShadrinComponent],
    imports: [
        CommonModule,
        // NewsRoutingModule,
        WrapperRoutingModule,
        RouterModule,
        DayModule,
        OglavModule,
        Slider3Module,
        Slider4Module,
        Slider5Module,
        Slider6Module,
        Slider7Module,
        Slider8Module,
        Slider9Module,
        Slider10Module,
        WrapperModule,
        SliderWithFourBlocksModule,
        SliderWithOneBlockCenterModule,
        SliderWithThreeCenterBlocksModule,
        WithArrowToBottomModule
    ]
})

export class TestModule { }