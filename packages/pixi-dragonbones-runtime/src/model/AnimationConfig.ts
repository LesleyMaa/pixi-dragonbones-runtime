/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2018 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import { BaseObject, AnimationFadeOutMode, TweenType } from "../core/index.js";

/**
 * [en] The animation config is used to describe all the information needed to play an animation state.
 * The API is still in the experimental phase and may encounter bugs or stability or compatibility issues when used.
 *
 * [zh] 动画配置用来描述播放一个动画状态所需要的全部信息。
 * 该 API 仍在实验阶段，使用时可能遭遇 bug 或稳定性或兼容性问题。
 *
 * @see AnimationState
 * @beta
 * @version DragonBones 5.0
 */
export class AnimationConfig extends BaseObject {
    public static toString(): string {
        return "[class dragonBones.AnimationConfig]";
    }
    /**
     * @private
     */
    public pauseFadeOut: boolean;
    /**
     * [en] Fade out the pattern of other animation states when the animation state is fade in.
     * This property is typically used to specify the substitution of multiple animation states blend.
     *
     * [zh] 淡入动画状态时淡出其他动画状态的模式。
     * 该属性通常用来指定多个动画状态混合时的相互替换关系。
     *
     * @default AnimationFadeOutMode.All
     * @version DragonBones 5.0
     */
    public fadeOutMode: AnimationFadeOutMode;
    /**
     * @private
     */
    public fadeOutTweenType: TweenType;
    /**
     * @private
     */
    public fadeOutTime: number;
    /**
     * @private
     */
    public pauseFadeIn: boolean;
    /**
     * @private
     */
    public actionEnabled: boolean;
    /**
     * @private
     */
    public additive: boolean;
    /**
     * [en] Whether the animation state has control over the display property of the slots.
     * Sometimes blend a animation state does not want it to control the display properties of the slots,
     * especially if other animation state are controlling the display properties of the slots.
     *
     * [zh] 动画状态是否对插槽的显示对象属性有控制权。
     * 有时混合一个动画状态并不希望其控制插槽的显示对象属性，
     * 尤其是其他动画状态正在控制这些插槽的显示对象属性时。
     *
     * @default true
     * @version DragonBones 5.0
     */
    public displayControl: boolean;
    /**
     * [en] Whether to reset the objects without animation to the armature pose when the animation state is start to play.
     * This property should usually be set to false when blend multiple animation states.
     *
     * [zh] 开始播放动画状态时是否将没有动画的对象重置为骨架初始值。
     * 通常在混合多个动画状态时应该将该属性设置为 false。
     *
     * @default true
     * @version DragonBones 5.1
     */
    public resetToPose: boolean;
    /**
     * @private
     */
    public fadeInTweenType: TweenType;
    /**
     * [en] The play times. [0: Loop play, [1~N]: Play N times]
     *
     * [zh] 播放次数。 [0: 无限循环播放, [1~N]: 循环播放 N 次]
     *
     * @version DragonBones 3.0
     */
    public playTimes: number;
    /**
     * [en] The blend layer.
     * High layer animation state will get the blend weight first.
     * When the blend weight is assigned more than 1, the remaining animation states will no longer get the weight assigned.
     *
     * [zh] 混合图层。
     * 图层高的动画状态会优先获取混合权重。
     * 当混合权重分配超过 1 时，剩余的动画状态将不再获得权重分配。
     *
     * @readonly
     * @version DragonBones 5.0
     */
    public layer: number;
    /**
     * [en] The start time of play. (In seconds)
     *
     * [zh] 播放的开始时间。 （以秒为单位）
     *
     * @default 0.0
     * @version DragonBones 5.0
     */
    public position: number;
    /**
     * [en] The duration of play.
     * [-1: Use the default value of the animation data, 0: Stop play, (0~N]: The duration] (In seconds)
     *
     * [zh] 播放的持续时间。
     * [-1: 使用动画数据默认值, 0: 动画停止, (0~N]: 持续时间] （以秒为单位）
     *
     * @default -1.0
     * @version DragonBones 5.0
     */
    public duration: number;
    /**
     * [en] The play speed.
     * The value is an overlay relationship with {@link Animation#timeScale}.
     * [(-N~0): Reverse play, 0: Stop play, (0~1): Slow play, 1: Normal play, (1~N): Fast play]
     *
     * [zh] 播放速度。
     * 该值与 {@link Animation#timeScale} 是叠加关系。
     * [(-N~0): 倒转播放, 0: 停止播放, (0~1): 慢速播放, 1: 正常播放, (1~N): 快速播放]
     *
     * @default 1.0
     * @version DragonBones 3.0
     */
    public timeScale: number;
    /**
     * [en] The blend weight.
     *
     * [zh] 混合权重。
     *
     * @default 1.0
     * @version DragonBones 5.0
     */
    public weight: number;
    /**
     * [en] The fade in time.
     * [-1: Use the default value of the animation data, [0~N]: The fade in time] (In seconds)
     *
     * [zh] 淡入时间。
     * [-1: 使用动画数据默认值, [0~N]: 淡入时间] （以秒为单位）
     *
     * @default -1.0
     * @version DragonBones 5.0
     */
    public fadeInTime: number;
    /**
     * [en] The auto fade out time when the animation state play completed.
     * [-1: Do not fade out automatically, [0~N]: The fade out time] (In seconds)
     *
     * [zh] 动画状态播放完成后的自动淡出时间。
     * [-1: 不自动淡出, [0~N]: 淡出时间] （以秒为单位）
     *
     * @default -1.0
     * @version DragonBones 5.0
     */
    public autoFadeOutTime: number;
    /**
     * [en] The name of the animation state. (Can be different from the name of the animation data)
     *
     * [zh] 动画状态名称。 （可以不同于动画数据）
     *
     * @version DragonBones 5.0
     */
    public name: string;
    /**
     * [en] The animation data name.
     *
     * [zh] 动画数据名称。
     *
     * @version DragonBones 5.0
     */
    public animation: string;
    /**
     * [en] The blend group name of the animation state.
     * This property is typically used to specify the substitution of multiple animation states blend.
     *
     * [zh] 混合组名称。
     * 该属性通常用来指定多个动画状态混合时的相互替换关系。
     *
     * @readonly
     * @version DragonBones 5.0
     */
    public group: string;
    /**
     * @private
     */
    public readonly boneMask: Array<string> = [];

    protected _onClear(): void {
        this.pauseFadeOut = true;
        this.fadeOutMode = AnimationFadeOutMode.All;
        this.fadeOutTweenType = TweenType.Line;
        this.fadeOutTime = -1.0;

        this.actionEnabled = true;
        this.additive = false;
        this.displayControl = true;
        this.pauseFadeIn = true;
        this.resetToPose = true;
        this.fadeInTweenType = TweenType.Line;
        this.playTimes = -1;
        this.layer = 0;
        this.position = 0.0;
        this.duration = -1.0;
        this.timeScale = -100.0;
        this.weight = 1.0;
        this.fadeInTime = -1.0;
        this.autoFadeOutTime = -1.0;
        this.name = "";
        this.animation = "";
        this.group = "";
        this.boneMask.length = 0;
    }
    /**
     * @private
     */
    public clear(): void {
        this._onClear();
    }
    /**
     * @private
     */
    public copyFrom(value: AnimationConfig): void {
        this.pauseFadeOut = value.pauseFadeOut;
        this.fadeOutMode = value.fadeOutMode;
        this.autoFadeOutTime = value.autoFadeOutTime;
        this.fadeOutTweenType = value.fadeOutTweenType;

        this.actionEnabled = value.actionEnabled;
        this.additive = value.additive;
        this.displayControl = value.displayControl;
        this.pauseFadeIn = value.pauseFadeIn;
        this.resetToPose = value.resetToPose;
        this.playTimes = value.playTimes;
        this.layer = value.layer;
        this.position = value.position;
        this.duration = value.duration;
        this.timeScale = value.timeScale;
        this.fadeInTime = value.fadeInTime;
        this.fadeOutTime = value.fadeOutTime;
        this.fadeInTweenType = value.fadeInTweenType;
        this.weight = value.weight;
        this.name = value.name;
        this.animation = value.animation;
        this.group = value.group;

        this.boneMask.length = value.boneMask.length;
        for (let i = 0, l = this.boneMask.length; i < l; ++i) {
            this.boneMask[i] = value.boneMask[i];
        }
    }
}
