import * as React from 'react';

import { Party as PartyType } from 'utils/partiesValues';

type Props = {
  party: PartyType | null
};

const Party: React.FC<Props> = (props) => {
  const { party } = props;

  if (party) {
    return (
      <div className="party__container">
        <div className="party">
          <div className="party__title">
            Najbliższa partia
          </div>
          <div className="party__info">
            <img alt={party.name} src={party.logo} />
            <span className="party__info__name">{party.name}</span>
            <div className="party__info__links">
              <a href={party.links.www} target="_blank" rel="noopener noreferrer">
                Strona WWW
              </a>
              <a href={party.links.programme} target="_blank" rel="noopener noreferrer">
                Program
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default Party;
