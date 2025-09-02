/**
 * BizAccordion 컴포넌트는 번호가 매겨진 아코디언 섹션 리스트를 렌더링합니다.
 * 각 섹션은 제목과 칩(서브 항목) 배열을 받아, 헤더 클릭 시 본문이 펼쳐지는 UI를 제공합니다.
 * 여러 섹션을 동시에 펼칠 수 있으며(멀티 오픈), 처음에는 모두 닫힌 상태입니다.
 *
 * @component BizAccordion
 * @param {{ id:number, title:string, chips:(string | {text:string, weak:boolean}[])[] }[]} items - 섹션 데이터 리스트
 *   - chips의 각 원소는 문자열이거나 `{ text, weak }` 조각들의 배열입니다. `weak=true`는 강조 약화(보조 표기)로 표시됩니다.
 * @example
 * // 문자열 칩
 * <BizAccordion items={[{ id:1, title:'디지털 교육 설계 및 실행', chips:['항목1','항목2'] }]} />
 *
 * // 파트 조합 칩 (weak 파트 포함)
 * <BizAccordion
 *   items={[{
 *     id:2,
 *     title:'디지털 학습 환경 개발',
 *     chips: [
 *       [{ text:'온라인 학습 플랫폼 ', weak:false }, { text:'LMS', weak:true }, { text:' 연구', weak:false }],
 *       [{ text:'Blended Learning', weak:true }]
 *     ]
 *   }]}
 * />
 *
 * @author 노진경
 **/

import { useState } from 'react';
import * as S from '@business/components/BizAccordionStyle';
import DownToggle from '@assets/business/downToggle.svg';
import UpToggle from '@assets/business/upToggle.svg';

function BizAccordion({ items = [] }) {
  const [openMap, setOpenMap] = useState({});
  const toggle = (id) => setOpenMap((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <S.List>
      {items.map((it) => (
        <S.Item key={it.id} $open={!!openMap[it.id]}>
          <S.Header type="button" onClick={() => toggle(it.id)}>
            <S.Num>{it.id}</S.Num>
            <S.Title>{it.title}</S.Title>
            <S.Chevron src={openMap[it.id] ? UpToggle : DownToggle} alt="" />
          </S.Header>
          {!!openMap[it.id] && (
            <S.Body>
              <S.Chips>
                {it.chips.map((chip, idx) => (
                  <S.Chip key={idx}>
                    {Array.isArray(chip)
                      ? chip.map((part, i) =>
                          part.weak ? (
                            <span key={i} className="weak">
                              {part.text}
                            </span>
                          ) : (
                            part.text
                          ),
                        )
                      : chip}
                  </S.Chip>
                ))}
              </S.Chips>
            </S.Body>
          )}
        </S.Item>
      ))}
    </S.List>
  );
}

export default BizAccordion;
