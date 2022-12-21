import { Radio } from "antd"
import { memo } from "react"
import { FoldExtraItem, IconView } from "../../Fold/FoldExtraItem"

export const fontStyleIcon = `<svg viewBox="0 0 1024 1024" height="1em" width="1em" fill="currentColor" focusable="false" aria-hidden="true"><path d="M352.741259,192 C384.06993,192 405.552448,209.006993 418.083916,236.755245 L418.083916,236.755245 L650.811189,755.916084 C655.286713,763.972028 657.076923,772.027972 657.076923,779.188811 C657.076923,808.727273 634.699301,832 605.160839,832 C579.202797,832 561.300699,816.783217 551.454545,793.51049 L551.454545,793.51049 L500.433566,676.251748 L196.097902,676.251748 L143.286713,797.090909 C134.335664,819.468531 115.538462,832 92.2657343,832 C63.6223776,832 41.2447552,809.622378 41.2447552,780.979021 C41.2447552,772.923077 43.9300699,764.867133 48.4055944,755.916084 L48.4055944,755.916084 L281.132867,236.755245 C293.664336,209.006993 316.041958,192 347.370629,192 L347.370629,192 Z M833.641026,492 C882.835165,492 919.575092,505.076923 942.615385,528.739927 C966.901099,552.40293 978.10989,587.274725 978.10989,630.241758 L978.10989,630.241758 L978.10989,792.14652 C978.10989,812.695971 961.919414,828.263736 941.369963,828.263736 C919.575092,828.263736 904.630037,813.318681 904.630037,796.505495 L904.630037,796.505495 L904.630037,784.051282 C882.212454,810.827839 847.96337,832 797.52381,832 C735.875458,832 681.076923,796.505495 681.076923,730.498168 L681.076923,730.498168 L681.076923,729.252747 C681.076923,658.263736 736.498168,623.391941 816.827839,623.391941 C853.567766,623.391941 879.721612,628.996337 905.252747,637.091575 L905.252747,637.091575 L905.252747,628.996337 C905.252747,582.29304 876.608059,557.384615 823.677656,557.384615 C795.032967,557.384615 771.369963,562.3663 750.820513,570.461538 C746.461538,571.70696 742.725275,572.32967 738.989011,572.32967 C721.553114,572.32967 707.230769,558.630037 707.230769,541.194139 C707.230769,527.494505 716.571429,515.663004 727.78022,511.304029 C758.915751,499.472527 790.673993,492 833.641026,492 Z M831.772894,671.340659 C783.201465,671.340659 754.556777,691.89011 754.556777,726.139194 L754.556777,726.139194 L754.556777,727.384615 C754.556777,759.142857 782.578755,777.201465 818.695971,777.201465 C868.512821,777.201465 906.498168,748.556777 906.498168,706.835165 L906.498168,706.835165 L906.498168,684.417582 C887.194139,676.945055 861.663004,671.340659 831.772894,671.340659 Z M348.265734,325.370629 L238.167832,578.685315 L458.363636,578.685315 L348.265734,325.370629 Z"></path></svg>`

export const normalFontStyleIcon = ` <svg viewBox="0 0 1024 1024" height="1em" width="1em" fill="currentColor" focusable="false" aria-hidden="true"><path d="M662,100 C684.09139,100 702,117.90861 702,140 C702,162.09139 684.09139,180 662,180 L551.95089,180.000411 C551.983502,180.662832 552,181.329489 552,182 L552,842 C552,842.670849 551.983486,843.33784 551.950841,844.00059 L662,844 C684.09139,844 702,861.90861 702,884 C702,906.09139 684.09139,924 662,924 L362,924 C339.90861,924 322,906.09139 322,884 C322,861.90861 339.90861,844 362,844 L472.049159,844.00059 C472.016514,843.33784 472,842.670849 472,842 L472,182 C472,181.329489 472.016498,180.662832 472.04911,180.000411 L362,180 C339.90861,180 322,162.09139 322,140 C322,117.90861 339.90861,100 362,100 L662,100 Z"></path></svg>`

export const italicFontSyleIcon = `<svg viewBox="0 0 1024 1024" height="1em" width="1em" fill="currentColor" focusable="false" aria-hidden="true"><path d="M712,100 C734.09139,100 752,117.90861 752,140 C752,162.09139 734.09139,180 712,180 L597.596446,180.000524 C598.053921,183.498391 598.05267,187.115299 597.537846,190.778461 L505.733,844 L616,844 C638.09139,844 656,861.90861 656,884 C656,906.09139 638.09139,924 616,924 L316,924 C293.90861,924 276,906.09139 276,884 C276,861.90861 293.90861,844 316,844 L426.403684,844.000476 C425.946079,840.502298 425.947281,836.88505 426.462154,833.221539 L518.266,180 L412,180 C389.90861,180 372,162.09139 372,140 C372,117.90861 389.90861,100 412,100 L712,100 Z"></path></svg>`

export const FontStyleSelect = memo((props: {
  title?: string,
  span?: number,
}) => {
  const { title, span = 12 } = props

  return (
    <FoldExtraItem span={span}
      title={title}
      icon={fontStyleIcon}
    >
      <Radio.Group options={[
        { label: <IconView icon={normalFontStyleIcon} />, value: 'normal' },
        { label: <IconView icon={italicFontSyleIcon} />, value: 'italic' },
      ]}
        optionType="button" />
    </FoldExtraItem>
  )
})