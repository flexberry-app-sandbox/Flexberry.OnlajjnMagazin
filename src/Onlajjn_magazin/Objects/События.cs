﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Onlajjn_magazin
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// События.
    /// </summary>
    // *** Start programmer edit section *** (События CustomAttributes)

    // *** End programmer edit section *** (События CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    public class События : ICSSoft.STORMNET.DataObject
    {
        
        private int fКод;
        
        private string fОписание;
        
        // *** Start programmer edit section *** (События CustomMembers)

        // *** End programmer edit section *** (События CustomMembers)

        
        /// <summary>
        /// Код.
        /// </summary>
        // *** Start programmer edit section *** (События.Код CustomAttributes)

        // *** End programmer edit section *** (События.Код CustomAttributes)
        public virtual int Код
        {
            get
            {
                // *** Start programmer edit section *** (События.Код Get start)

                // *** End programmer edit section *** (События.Код Get start)
                int result = this.fКод;
                // *** Start programmer edit section *** (События.Код Get end)

                // *** End programmer edit section *** (События.Код Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (События.Код Set start)

                // *** End programmer edit section *** (События.Код Set start)
                this.fКод = value;
                // *** Start programmer edit section *** (События.Код Set end)

                // *** End programmer edit section *** (События.Код Set end)
            }
        }
        
        /// <summary>
        /// Описание.
        /// </summary>
        // *** Start programmer edit section *** (События.Описание CustomAttributes)

        // *** End programmer edit section *** (События.Описание CustomAttributes)
        [StrLen(255)]
        public virtual string Описание
        {
            get
            {
                // *** Start programmer edit section *** (События.Описание Get start)

                // *** End programmer edit section *** (События.Описание Get start)
                string result = this.fОписание;
                // *** Start programmer edit section *** (События.Описание Get end)

                // *** End programmer edit section *** (События.Описание Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (События.Описание Set start)

                // *** End programmer edit section *** (События.Описание Set start)
                this.fОписание = value;
                // *** Start programmer edit section *** (События.Описание Set end)

                // *** End programmer edit section *** (События.Описание Set end)
            }
        }
    }
}
