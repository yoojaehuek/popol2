import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../scss/drop.scss"

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='drop'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Music Hub란 무엇인가요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          "Music Hub"은 음악과 관련된 정보, 서비스, 아티스트, 앨범, 음악 트렌드 등을 하나로 모아 제공하는 플랫폼을 나타냅니다. 
          사용자들은 Music Hub을 통해 다양한 음악 장르를 탐험하고 새로운 아티스트를 발견할 수 있습니다. 
          또한, 플레이리스트를 만들고 음악 추천을 받아 원하는 음악 경험을 만들어갈 수 있습니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          Music Hub을 어떻게 이용할 수 있나요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          "Music Hub"을 이용하려면 먼저 계정을 생성하고 로그인하세요. 그런 다음, 원하는 음악을 검색하거나 음악 장르, 아티스트를 탐험해보세요. 플레이리스트를 만들거나 다른 사용자들과 공유할 수도 있습니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          Music Hub에서 어떤 음악을 찾아볼 수 있나요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          "Music Hub"에서는 최신 음악부터 클래식, 팝, 힙합, EDM, 록 등 다양한 음악 장르를 찾아볼 수 있습니다. 특정 아티스트의 노래나 앨범을 찾거나, 유명한 플레이리스트를 살펴보실 수도 있습니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          Music Hub에서 음악을 어떻게 스트리밍하나요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          "Music Hub"에서 음악을 스트리밍하려면 음악을 선택한 후 '재생' 버튼을 클릭하시면 됩니다. 또한, 오프라인에서 듣기 위해 음악을 다운로드할 수도 있습니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          Music Hub에서 어떻게 플레이리스트를 만들고 공유할 수 있나요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          플레이리스트를 만들려면 좋아하는 노래나 아티스트를 선택하고 '플레이리스트에 추가' 버튼을 클릭하세요. 그런 다음, '내 플레이리스트'에서 새로운 플레이리스트를 만들 수 있습니다. 원하는 플레이리스트를 다른 사용자들과 공유하려면 '공유' 버튼을 클릭하실 수 있습니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}